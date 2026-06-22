import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = 'dharrenpark2024@gmail.com';

export async function POST(req) {
  try {
    const { studentName, studentEmail, plan, billing, amount, method, reference } = await req.json();

    const planLabel    = plan.charAt(0).toUpperCase() + plan.slice(1);
    const billingLabel = billing === 'annual' ? 'Annual' : 'Monthly';
    const methodLabel  = method.toUpperCase();

    await resend.emails.send({
      from:    'Dharren Park BIM <onboarding@resend.dev>',
      to:      ADMIN_EMAIL,
      subject: `💰 New Payment Submission — ${planLabel} Plan (₱${amount?.toLocaleString()})`,
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:'Segoe UI',Arial,sans-serif;color:#e8eaf0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:24px;text-align:center;">
              <div style="font-size:20px;font-weight:800;color:#ffffff;">
                Dharren Park <span style="color:#f59e0b;">BIM</span>
              </div>
              <div style="font-size:11px;color:#8892a4;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">Admin Notification</div>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td style="background:#111827;border:1px solid rgba(245,158,11,0.25);border-radius:16px;padding:36px;">

              <!-- Icon + title -->
              <div style="text-align:center;margin-bottom:28px;">
                <div style="font-size:44px;margin-bottom:10px;">💰</div>
                <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">New Payment Submitted</h1>
                <p style="margin:8px 0 0;font-size:13px;color:#8892a4;">A student has submitted a payment and is waiting for confirmation.</p>
              </div>

              <!-- Student info -->
              <div style="background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.2);border-radius:12px;padding:20px 24px;margin-bottom:20px;">
                <div style="font-size:11px;font-weight:600;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;margin-bottom:14px;">Student Details</div>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;width:40%;">Name</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;font-weight:600;">${studentName}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Email</td>
                    <td style="padding:5px 0;font-size:13px;color:#60a5fa;">${studentEmail}</td>
                  </tr>
                </table>
              </div>

              <!-- Payment info -->
              <div style="background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.2);border-radius:12px;padding:20px 24px;margin-bottom:28px;">
                <div style="font-size:11px;font-weight:600;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;margin-bottom:14px;">Payment Details</div>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;width:40%;">Plan</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;font-weight:600;">${planLabel} Plan</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Billing</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;font-weight:600;">${billingLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Amount</td>
                    <td style="padding:5px 0;font-size:13px;color:#f59e0b;font-weight:700;">₱${amount?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Method</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;font-weight:600;">${methodLabel}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Reference #</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;font-weight:700;font-family:'Courier New',monospace;">${reference}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Submitted</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;">${new Date().toLocaleString('en-PH', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                  </tr>
                </table>
              </div>

              <!-- CTA -->
              <div style="text-align:center;">
                <a href="https://dharren-park-bim.vercel.app/admin"
                   style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:14px;font-weight:600;">
                  Review in Admin Panel →
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:20px;text-align:center;">
              <p style="font-size:11px;color:#4b5563;margin:0;">
                © 2026 Dharren Park BIM System · Admin Notification
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error('Admin notify error:', err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}