import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

export async function POST(req) {
  try {
    const { adminEmail } = await req.json();
    if (!ADMIN_EMAILS.includes(adminEmail)) {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Get all auth users
    const { data: { users }, error: usersErr } = await supabaseAdmin.auth.admin.listUsers();
    if (usersErr) throw usersErr;

    // Get all user_plans
    const { data: plans } = await supabaseAdmin.from('user_plans').select('*');

    // Get all profiles
    const { data: profiles } = await supabaseAdmin.from('profiles').select('*');

    // Get lesson progress counts per user
    const { data: progress } = await supabaseAdmin
      .from('lesson_progress').select('user_id, lesson_id').eq('completed', true);

    // Get quiz attempts per user
    const { data: quizzes } = await supabaseAdmin
      .from('quiz_attempts').select('user_id, score, passed');

    // Get payment submissions per user
    const { data: payments } = await supabaseAdmin
      .from('payment_submissions').select('user_id, plan, amount, status, submitted_at')
      .order('submitted_at', { ascending: false });

    // Build student list
    const students = users.map(user => {
      const profile  = profiles?.find(p => p.id === user.id);
      const plan     = plans?.find(p => p.user_id === user.id);
      const userProgress = progress?.filter(p => p.user_id === user.id) || [];
      const userQuizzes  = quizzes?.filter(q => q.user_id === user.id) || [];
      const userPayments = payments?.filter(p => p.user_id === user.id) || [];

      const avgScore = userQuizzes.length
        ? Math.round(userQuizzes.reduce((a, q) => a + q.score, 0) / userQuizzes.length)
        : null;

      return {
        id:           user.id,
        email:        user.email,
        firstName:    profile?.first_name || user.user_metadata?.first_name || '',
        lastName:     profile?.last_name  || user.user_metadata?.last_name  || '',
        phone:        profile?.phone      || user.user_metadata?.phone      || '',
        country:      profile?.country    || user.user_metadata?.country    || '',
        profession:   profile?.profession || user.user_metadata?.profession || '',
        joinedAt:     user.created_at,
        plan:         plan?.plan     || profile?.plan || 'free',
        planStatus:   plan?.status   || 'free',
        planBilling:  plan?.billing  || null,
        planExpiry:   plan?.expires_at || null,
        lessonsCompleted: userProgress.length,
        quizzesTaken: userQuizzes.length,
        quizzesPassed: userQuizzes.filter(q => q.passed).length,
        avgScore,
        payments:     userPayments,
        lastLogin:    user.last_sign_in_at,
      };
    });

    return Response.json({ students });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}