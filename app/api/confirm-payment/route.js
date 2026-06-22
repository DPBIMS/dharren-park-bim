import { createClient } from '@supabase/supabase-js';

// This API route uses the SERVICE ROLE key — it bypasses RLS
// Only callable from the admin dashboard
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com']; // ← your email here

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
      // Update payment status to confirmed
      await supabaseAdmin
        .from('payment_submissions')
        .update({
          status: 'confirmed',
          confirmed_at: new Date().toISOString(),
          confirmed_by: adminEmail,
          notes: notes || null,
        })
        .eq('id', paymentId);

      // Calculate expiry date
      const now = new Date();
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
          user_id: payment.user_id,
          plan: payment.plan,
          billing: payment.billing,
          status: 'active',
          started_at: now.toISOString(),
          expires_at: expiresAt.toISOString(),
          payment_id: paymentId,
        }, { onConflict: 'user_id' });

      return Response.json({ success: true, message: `Payment confirmed. ${payment.plan} plan activated.` });

    } else if (action === 'reject') {
      await supabaseAdmin
        .from('payment_submissions')
        .update({
          status: 'rejected',
          confirmed_at: new Date().toISOString(),
          confirmed_by: adminEmail,
          notes: notes || 'Payment rejected by admin.',
        })
        .eq('id', paymentId);

      return Response.json({ success: true, message: 'Payment rejected.' });
    }

    return Response.json({ error: 'Invalid action' }, { status: 400 });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}