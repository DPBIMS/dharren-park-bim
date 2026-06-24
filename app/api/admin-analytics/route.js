import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com'];

const lessonTitles = {
  1:'What is BIM?', 2:'BIM vs CAD', 3:'Getting Started with Revit',
  4:'Understanding LOD', 5:'BIM Execution Plan', 6:'Revit Families',
  7:'Clash Detection', 8:'MEP Coordination', 9:'IFC Standard',
  10:'BIM 360', 11:'4D BIM', 12:'BIM in the Philippines',
};

export async function POST(req) {
  try {
    const { adminEmail } = await req.json();
    if (!ADMIN_EMAILS.includes(adminEmail)) {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // 1. Revenue from confirmed payments
    const { data: payments } = await supabaseAdmin
      .from('payment_submissions').select('plan, billing, amount, status, submitted_at')
      .order('submitted_at', { ascending: true });

    const confirmed = payments?.filter(p => p.status === 'confirmed') || [];
    const totalRevenue = confirmed.reduce((sum, p) => sum + (p.amount || 0), 0);
    const pendingRevenue = (payments?.filter(p => p.status === 'pending') || [])
      .reduce((sum, p) => sum + (p.amount || 0), 0);

    // Revenue by plan
    const revenueByPlan = confirmed.reduce((acc, p) => {
      acc[p.plan] = (acc[p.plan] || 0) + (p.amount || 0);
      return acc;
    }, {});

    // Revenue by month
    const revenueByMonth = confirmed.reduce((acc, p) => {
      const month = new Date(p.submitted_at).toLocaleDateString('en-PH', { month:'short', year:'numeric' });
      acc[month] = (acc[month] || 0) + (p.amount || 0);
      return acc;
    }, {});

    // 2. Student signups
    const { data: { users } } = await supabaseAdmin.auth.admin.listUsers();
    const totalStudents = users?.length || 0;

    // Signups by month
    const signupsByMonth = (users || []).reduce((acc, u) => {
      const month = new Date(u.created_at).toLocaleDateString('en-PH', { month:'short', year:'numeric' });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    // 3. Plan distribution from user_plans
    const { data: plans } = await supabaseAdmin.from('user_plans').select('plan, status');
    const { data: profiles } = await supabaseAdmin.from('profiles').select('plan');

    const planCounts = { free: 0, basic: 0, pro: 0, premium: 0 };
    const activePlans = plans?.filter(p => p.status === 'active') || [];
    activePlans.forEach(p => { if (planCounts[p.plan] !== undefined) planCounts[p.plan]++; });
    planCounts.free = totalStudents - activePlans.length;

    // 4. Quiz analytics
    const { data: quizzes } = await supabaseAdmin.from('quiz_attempts').select('*');
    const totalAttempts  = quizzes?.length || 0;
    const totalPassed    = quizzes?.filter(q => q.passed).length || 0;
    const totalFailed    = quizzes?.filter(q => !q.passed).length || 0;
    const avgScore       = quizzes?.length
      ? Math.round(quizzes.reduce((s, q) => s + q.score, 0) / quizzes.length)
      : 0;
    const passRate       = totalAttempts ? Math.round((totalPassed / totalAttempts) * 100) : 0;

    // Quiz scores by lesson
    const quizByLesson = Object.entries(
      (quizzes || []).reduce((acc, q) => {
        if (!acc[q.lesson_id]) acc[q.lesson_id] = { scores:[], passed:0, total:0 };
        acc[q.lesson_id].scores.push(q.score);
        acc[q.lesson_id].total++;
        if (q.passed) acc[q.lesson_id].passed++;
        return acc;
      }, {})
    ).map(([id, data]) => ({
      lessonId:  Number(id),
      title:     lessonTitles[id] || `Lesson ${id}`,
      avgScore:  Math.round(data.scores.reduce((a,b)=>a+b,0)/data.scores.length),
      passRate:  Math.round((data.passed/data.total)*100),
      attempts:  data.total,
    })).sort((a,b) => a.lessonId - b.lessonId);

    // 5. Lesson completion rates
    const { data: progress } = await supabaseAdmin
      .from('lesson_progress').select('lesson_id, user_id').eq('completed', true);

    const lessonCompletions = Array.from({length:12}, (_,i) => ({
      lessonId: i+1,
      title:    lessonTitles[i+1],
      count:    (progress||[]).filter(p => p.lesson_id === i+1).length,
    }));

    // 6. Payment submission stats
    const submissionStats = {
      total:     payments?.length || 0,
      confirmed: confirmed.length,
      pending:   payments?.filter(p=>p.status==='pending').length || 0,
      rejected:  payments?.filter(p=>p.status==='rejected').length || 0,
    };

    // 7. Certificates issued
    const { data: certs, count: certCount } = await supabaseAdmin
      .from('certificates').select('*', { count:'exact' });

    return Response.json({
      revenue: {
        total:       totalRevenue,
        pending:     pendingRevenue,
        byPlan:      revenueByPlan,
        byMonth:     revenueByMonth,
      },
      students: {
        total:       totalStudents,
        byPlan:      planCounts,
        byMonth:     signupsByMonth,
      },
      quizzes: {
        totalAttempts,
        totalPassed,
        totalFailed,
        avgScore,
        passRate,
        byLesson:    quizByLesson,
      },
      lessons: {
        completions: lessonCompletions,
        totalCompleted: (progress||[]).length,
      },
      payments:      submissionStats,
      certificates:  certCount || 0,
    });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}