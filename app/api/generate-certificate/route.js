import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const TOTAL_LESSONS = 12;

function generateCertId() {
  const year   = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `DPBIM-${year}-${random}`;
}

export async function POST(req) {
  try {
    const { userId, fullName } = await req.json();
    if (!userId || !fullName) {
      return Response.json({ error: 'Missing userId or fullName' }, { status: 400 });
    }

    // Verify user has premium plan
    const { data: plan } = await supabaseAdmin
      .from('user_plans').select('plan, status')
      .eq('user_id', userId).eq('status', 'active').single();

    if (plan?.plan !== 'premium') {
      return Response.json({ error: 'Certificate requires Premium plan' }, { status: 403 });
    }

    // Verify all 12 lessons completed
    const { data: progress, count } = await supabaseAdmin
      .from('lesson_progress').select('lesson_id', { count: 'exact' })
      .eq('user_id', userId).eq('completed', true);

    if (!count || count < TOTAL_LESSONS) {
      return Response.json({
        error: `Complete all ${TOTAL_LESSONS} lessons first. You've completed ${count || 0}.`
      }, { status: 403 });
    }

    // Check if certificate already exists
    const { data: existing } = await supabaseAdmin
      .from('certificates').select('*').eq('user_id', userId).single();

    if (existing) {
      return Response.json({ success: true, certificate: existing });
    }

    // Generate new certificate
    const certId = generateCertId();
    const { data: cert, error: certErr } = await supabaseAdmin
      .from('certificates').insert({
        user_id:        userId,
        certificate_id: certId,
        full_name:      fullName,
        issued_at:      new Date().toISOString(),
      }).select().single();

    if (certErr) throw certErr;

    return Response.json({ success: true, certificate: cert });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const certId = searchParams.get('id');
    if (!certId) return Response.json({ error: 'Missing certificate id' }, { status: 400 });

    const { data: cert, error } = await supabaseAdmin
      .from('certificates').select('*').eq('certificate_id', certId).single();

    if (error || !cert) {
      return Response.json({ error: 'Certificate not found' }, { status: 404 });
    }

    return Response.json({ certificate: cert });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}