import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Service role client — bypasses RLS, only used server-side
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

const planFeatures = {
  basic:   ['Full access to BIM articles', 'Core lessons & topics', 'Beginner learning path'],
  pro:     ['Everything in Basic', 'Downloadable PDFs', 'Quizzes & assessments', 'Intermediate lessons'],
  premium: ['Everything in Pro', 'Video lessons (coming soon)', '3D model resources', 'Priority support', 'Early access', 'Certificate'],
};

function buildConfirmEmail({ fullName, plan, billing, amount, expiresAt }) {
  const features = planFeatures[plan] || [];
  const expiry   = new Date(expiresAt).toLocaleDateString('en-PH', { dateStyle: 'long' });
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  const billingLabel = billing === 'annual' ? 'Annual' : 'Monthly';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Payment Confirmed — Dharren Park BIM</title>
</head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:'Segoe UI',Arial,sans-serif;color:#e8eaf0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Dharren Park <span style="color:#f59e0b;">BIM</span>
              </div>
              <div style="font-size:12px;color:#8892a4;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">
                BIM Learning System
              </div>
            </td>
          </tr>

          <!-- Success card -->
          <tr>
            <td style="background:#111827;border:1px solid rgba(34,197,94,0.25);border-radius:16px;padding:40px 36px;">

              <!-- Icon + title -->
              <div style="text-align:center;margin-bottom:28px;">
                <div style="font-size:48px;margin-bottom:12px;">✅</div>
                <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;">Payment Confirmed!</h1>
                <p style="margin:8px 0 0;font-size:14px;color:#8892a4;">Your account has been upgraded successfully.</p>
              </div>

              <!-- Greeting -->
              <p style="font-size:15px;color:#d1d5db;line-height:1.6;margin:0 0 24px;">
                Hi <strong style="color:#ffffff;">${fullName}</strong>,<br/><br/>
                Great news — your payment has been verified and your <strong style="color:#f59e0b;">${planLabel} Plan</strong> is now active. You have full access to all ${planLabel} content on Dharren Park BIM.
              </p>

              <!-- Plan details box -->
              <div style="background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.2);border-radius:12px;padding:20px 24px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:600;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;margin-bottom:14px;">Plan Details</div>
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
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Amount Paid</td>
                    <td style="padding:5px 0;font-size:13px;color:#ffffff;font-weight:600;">₱${amount?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Access Until</td>
                    <td style="padding:5px 0;font-size:13px;color:#4ade80;font-weight:600;">${expiry}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;font-size:13px;color:#9ca3af;">Status</td>
                    <td style="padding:5px 0;font-size:13px;color:#4ade80;font-weight:600;">✓ Active</td>
                  </tr>
                </table>
              </div>

              <!-- What's included -->
              <div style="margin-bottom:28px;">
                <div style="font-size:11px;font-weight:600;letter-spacing:1.5px;color:#6b7280;text-transform:uppercase;margin-bottom:12px;">What's Included</div>
                ${features.map(f => `
                <div style="display:flex;align-items:flex-start;margin-bottom:8px;">
                  <span style="color:#3b82f6;margin-right:8px;font-size:14px;">✓</span>
                  <span style="font-size:13px;color:#d1d5db;">${f}</span>
                </div>`).join('')}
              </div>

              <!-- CTA button -->
              <div style="text-align:center;margin-bottom:24px;">
                <a href="https://dharren-park-bim.vercel.app/dashboard"
                   style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.3px;">
                  Go to My Dashboard →
                </a>
              </div>

              <!-- Support note -->
              <p style="font-size:12px;color:#6b7280;text-align:center;margin:0;line-height:1.6;">
                Questions? Reply to this email or contact us at<br/>
                <a href="mailto:dharrenpark2024@gmail.com" style="color:#3b82f6;">dharrenpark2024@gmail.com</a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="font-size:11px;color:#4b5563;margin:0;line-height:1.7;">
                © 2026 Dharren Park BIM System · All rights reserved<br/>
                <a href="https://dharren-park-bim.vercel.app" style="color:#4b5563;">dharren-park-bim.vercel.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildRejectionEmail({ fullName, plan, notes }) {
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:'Segoe UI',Arial,sans-serif;color:#e8eaf0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e1a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;">
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <div style="font-size:22px;font-weight:800;color:#ffffff;">
                Dharren Park <span style="color:#f59e0b;">BIM</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#111827;border:1px solid rgba(239,68,68,0.2);border-radius:16px;padding:40px 36px;">
              <div style="text-align:center;margin-bottom:28px;">
                <div style="font-size:48px;margin-bottom:12px;">⚠️</div>
                <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">Payment Not Verified</h1>
                <p style="margin:8px 0 0;font-size:14px;color:#8892a4;">We were unable to confirm your payment.</p>
              </div>
              <p style="font-size:15px;color:#d1d5db;line-height:1.6;margin:0 0 20px;">
                Hi <strong style="color:#ffffff;">${fullName}</strong>,<br/><br/>
                Unfortunately we could not verify your payment for the <strong style="color:#f59e0b;">${planLabel} Plan</strong>.
                ${notes ? `<br/><br/><strong>Reason:</strong> ${notes}` : ''}
              </p>
              <p style="font-size:14px;color:#d1d5db;line-height:1.6;margin:0 0 28px;">
                Please try submitting your payment again with a clear screenshot or correct reference number. If you believe this is a mistake, reply to this email and we'll sort it out quickly.
              </p>
              <div style="text-align:center;margin-bottom:24px;">
                <a href="https://dharren-park-bim.vercel.app/pricing"
                   style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:14px;font-weight:600;">
                  Try Again →
                </a>
              </div>
              <p style="font-size:12px;color:#6b7280;text-align:center;margin:0;">
                Need help? <a href="mailto:dharrenpark2024@gmail.com" style="color:#3b82f6;">dharrenpark2024@gmail.com</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="font-size:11px;color:#4b5563;margin:0;">© 2026 Dharren Park BIM System</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req) {
  try {
    const { paymentId, action, adminEmail, notes } = await req.json();

    // Verify admin
    if (!ADMIN_EMAILS.includes(adminEmail)) {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Get the payment submission
    const { data: payment, error: fetchError } = await supabaseAdmin
      .from('payment_submissions')
      .select('*')
      .eq('id', paymentId)
      .single();

    if (fetchError || !payment) {
      return Response.json({ error: 'Payment not found' }, { status: 404 });
    }

    if (action === 'confirm') {
      // Update payment status
      await supabaseAdmin
        .from('payment_submissions')
        .update({
          status:       'confirmed',
          confirmed_at: new Date().toISOString(),
          confirmed_by: adminEmail,
          notes:        notes || null,
        })
        .eq('id', paymentId);

      // Calculate expiry
      const now       = new Date();
      const expiresAt = new Date(now);
      if (payment.billing === 'annual') {
        expiresAt.setFullYear(expiresAt.getFullYear() + 1);
      } else {
        expiresAt.setMonth(expiresAt.getMonth() + 1);
      }

      // Upsert user plan
      await supabaseAdmin
        .from('user_plans')
        .upsert({
          user_id:    payment.user_id,
          plan:       payment.plan,
          billing:    payment.billing,
          status:     'active',
          started_at: now.toISOString(),
          expires_at: expiresAt.toISOString(),
          payment_id: paymentId,
        }, { onConflict: 'user_id' });

      // Send confirmation email
      await resend.emails.send({
        from:    'Dharren Park BIM <onboarding@resend.dev>',
        to:      payment.email,
        subject: `✅ Payment Confirmed — ${payment.plan.charAt(0).toUpperCase() + payment.plan.slice(1)} Plan Activated!`,
        html:    buildConfirmEmail({
          fullName:  payment.full_name || 'Student',
          plan:      payment.plan,
          billing:   payment.billing,
          amount:    payment.amount,
          expiresAt: expiresAt.toISOString(),
        }),
      });

      return Response.json({ success: true, message: `Payment confirmed. ${payment.plan} plan activated. Email sent to ${payment.email}.` });

    } else if (action === 'reject') {
      await supabaseAdmin
        .from('payment_submissions')
        .update({
          status:       'rejected',
          confirmed_at: new Date().toISOString(),
          confirmed_by: adminEmail,
          notes:        notes || 'Payment rejected by admin.',
        })
        .eq('id', paymentId);

      // Send rejection email
      await resend.emails.send({
        from:    'Dharren Park BIM <onboarding@resend.dev>',
        to:      payment.email,
        subject: `⚠️ Payment Not Verified — Dharren Park BIM`,
        html:    buildRejectionEmail({
          fullName: payment.full_name || 'Student',
          plan:     payment.plan,
          notes:    notes || '',
        }),
      });

      return Response.json({ success: true, message: `Payment rejected. Email sent to ${payment.email}.` });
    }

    return Response.json({ error: 'Invalid action' }, { status: 400 });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}