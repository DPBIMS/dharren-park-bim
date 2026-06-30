'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import AdminOnlyGate from '@/components/AdminOnlyGate';

const PLAN_ACCESS = {
  free:    (l) => l.free,
  basic:   (l) => l.cat === 'beginner',
  pro:     (l) => l.cat === 'beginner' || l.cat === 'intermediate',
  premium: ()  => true,
};

export default function FamilySetupQuizClient(props) {
  return (
    <AdminOnlyGate title="Revit Family Setup" backHref="/software/revit/family-setup" backLabel="← Back to Family Setup">
      <FamilySetupQuizClientInner {...props} />
    </AdminOnlyGate>
  );
}

function FamilySetupQuizClientInner({ quiz, lesson }) {
  const router = useRouter();
  const [activePlan,  setActivePlan]  = useState('free');
  const [answers,     setAnswers]     = useState({});
  const [submitted,   setSubmitted]   = useState(false);
  const [score,       setScore]       = useState(0);
  const [passed,      setPassed]      = useState(false);
  const [loading,     setLoading]     = useState(true);
  const [user,        setUser]        = useState(null);

  useEffect(() => {
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (!u) { setLoading(false); return; }
      setUser(u);

      const { data: planData } = await supabase
        .from('user_plans').select('plan')
        .eq('user_id', u.id).eq('status', 'active').single();
      if (planData?.plan) setActivePlan(planData.plan);
      else {
        const { data: profile } = await supabase
          .from('profiles').select('plan').eq('id', u.id).single();
        setActivePlan(profile?.plan || 'free');
      }

      setLoading(false);
    }
    load();
  }, []);

  function canAccess(l) {
    const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
    return checker(l);
  }

  const accessible = canAccess(lesson);

  function handleAnswer(qIndex, value) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIndex]: value }));
  }

  async function handleSubmit() {
    if (!user) { router.push('/login'); return; }

    let correct = 0;
    quiz.questions.forEach((q, i) => {
      const userAns = answers[i];
      if (q.type === 'truefalse') {
        if (userAns === q.answer) correct++;
      } else {
        if (String(userAns).toLowerCase().trim() === String(q.answer).toLowerCase().trim()) correct++;
      }
    });

    const total     = quiz.questions.length;
    const pct       = Math.round((correct / total) * 100);
    const didPass   = pct >= quiz.passingScore;

    setScore(pct);
    setPassed(didPass);
    setSubmitted(true);

    await supabase.from('quiz_attempts').insert({
      user_id:   user.id,
      lesson_id: String(lesson.id),
      score:     pct,
      passed:    didPass,
    });
  }

  function handleRetake() {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setPassed(false);
  }

  // Locked
  if (!loading && !accessible) {
    return (
      <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
        <div style={{ maxWidth:'720px', margin:'0 auto', padding:'4rem 2rem', textAlign:'center' }}>
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔒</div>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.4rem', marginBottom:'.75rem' }}>Quiz Locked</h2>
          <p style={{ color:'#8892a4', fontSize:'14px', marginBottom:'2rem' }}>Upgrade your plan to access this quiz.</p>
          <Link href="/pricing" style={{ background:'#f59e0b', color:'#000', padding:'12px 28px', borderRadius:'8px', fontWeight:600, textDecoration:'none', fontSize:'14px' }}>
            Upgrade Now →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'.85rem 2rem', display:'flex', alignItems:'center', gap:'1.25rem', maxWidth:'1100px', margin:'0 auto', fontSize:'13px', color:'#8892a4' }}>
        <Link href={`/software/revit/family-setup/${lesson.id}`} style={{ color:'#8892a4', textDecoration:'none' }}>
          ← Back to Lesson
        </Link>
        <span style={{ color:'rgba(255,255,255,0.12)' }}>|</span>
        <span>{lesson.title}</span>
      </div>

      <div style={{ maxWidth:'720px', margin:'0 auto', padding:'3rem 2rem 5rem' }}>

        {/* Quiz header */}
        <div style={{ marginBottom:'2rem' }}>
          <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#f59e0b', marginBottom:'.4rem' }}>
            Revit Family Setup · Quiz
          </div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.8rem', letterSpacing:'-.3px', marginBottom:'.5rem' }}>
            {quiz.title}
          </h1>
          <p style={{ color:'#8892a4', fontSize:'13px' }}>
            {quiz.questions.length} questions · {quiz.passingScore}% to pass · Select one answer per question
          </p>
        </div>

        {/* Result banner */}
        {submitted && (
          <div style={{
            background: passed ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${passed ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
            borderRadius:'14px', padding:'1.5rem', marginBottom:'2rem',
            display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'.75rem',
          }}>
            <div style={{ fontSize:'2.5rem' }}>{passed ? '🎉' : '📚'}</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.3rem' }}>
              {passed ? 'Quiz Passed!' : 'Not Yet Passed'}
            </div>
            <div style={{
              fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2.5rem',
              color: passed ? '#4ade80' : '#f87171',
            }}>
              {score}%
            </div>
            <div style={{ fontSize:'13px', color:'#8892a4' }}>
              {passed
                ? `Great work! You scored ${score}% and passed.`
                : `You scored ${score}%. You need ${quiz.passingScore}% to pass. Review the lesson and try again.`
              }
            </div>
            <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap', justifyContent:'center', marginTop:'.5rem' }}>
              <button onClick={handleRetake}
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:500, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                Retake Quiz
              </button>
              {passed && lesson.next && (
                <Link href={`/software/revit/family-setup/${lesson.next}`}
                  style={{ background:'#f59e0b', color:'#000', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:700, textDecoration:'none' }}>
                  Next Lesson →
                </Link>
              )}
              <Link href="/software/revit/family-setup"
                style={{ background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.2)', color:'#f59e0b', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:500, textDecoration:'none' }}>
                Back to Course
              </Link>
            </div>
          </div>
        )}

        {/* Questions */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
          {quiz.questions.map((q, qi) => {
            const userAns   = answers[qi];
            const isCorrect = submitted && (
              q.type === 'truefalse'
                ? userAns === q.answer
                : String(userAns).toLowerCase().trim() === String(q.answer).toLowerCase().trim()
            );
            const isWrong = submitted && userAns !== undefined && !isCorrect;

            return (
              <div key={qi} style={{
                background:'rgba(255,255,255,0.04)',
                border:`1px solid ${submitted ? (isCorrect ? 'rgba(34,197,94,0.25)' : isWrong ? 'rgba(239,68,68,0.25)' : 'rgba(255,255,255,0.08)') : 'rgba(255,255,255,0.08)'}`,
                borderRadius:'14px', padding:'1.25rem',
              }}>
                {/* Question */}
                <div style={{ display:'flex', gap:'10px', marginBottom:'1rem' }}>
                  <span style={{ background:'rgba(245,158,11,0.12)', color:'#f59e0b', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'6px', padding:'2px 9px', fontSize:'11px', fontWeight:700, flexShrink:0, height:'fit-content', marginTop:'2px' }}>
                    Q{qi + 1}
                  </span>
                  <div style={{ fontSize:'14px', color:'#e8eaf0', lineHeight:'1.6', fontWeight:500 }}>{q.question}</div>
                </div>

                {/* MCQ Options */}
                {q.type === 'mcq' && (
                  <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
                    {q.options.map((opt, oi) => {
                      const isSelected = userAns === opt;
                      const isRight    = submitted && opt === q.answer;
                      const isBad      = submitted && isSelected && opt !== q.answer;
                      return (
                        <div key={oi} onClick={() => handleAnswer(qi, opt)}
                          style={{
                            padding:'10px 14px', borderRadius:'8px', fontSize:'13px', cursor: submitted ? 'default' : 'pointer',
                            display:'flex', alignItems:'center', gap:'10px',
                            background: isRight ? 'rgba(34,197,94,0.1)' : isBad ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isRight ? 'rgba(34,197,94,0.35)' : isBad ? 'rgba(239,68,68,0.35)' : isSelected ? 'rgba(245,158,11,0.35)' : 'rgba(255,255,255,0.07)'}`,
                            color: isRight ? '#4ade80' : isBad ? '#f87171' : isSelected ? '#f59e0b' : '#c8d0e8',
                          }}>
                          <span style={{ fontSize:'11px', fontWeight:700, width:'18px', flexShrink:0 }}>
                            {isRight ? '✓' : isBad ? '✗' : String.fromCharCode(65 + oi)}
                          </span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* True/False */}
                {q.type === 'truefalse' && (
                  <div style={{ display:'flex', gap:'.75rem' }}>
                    {[true, false].map(val => {
                      const isSelected = userAns === val;
                      const isRight    = submitted && val === q.answer;
                      const isBad      = submitted && isSelected && val !== q.answer;
                      return (
                        <div key={String(val)} onClick={() => handleAnswer(qi, val)}
                          style={{
                            flex:1, padding:'10px', borderRadius:'8px', textAlign:'center', fontSize:'13px', fontWeight:600, cursor: submitted ? 'default' : 'pointer',
                            background: isRight ? 'rgba(34,197,94,0.1)' : isBad ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isRight ? 'rgba(34,197,94,0.35)' : isBad ? 'rgba(239,68,68,0.35)' : isSelected ? 'rgba(245,158,11,0.35)' : 'rgba(255,255,255,0.07)'}`,
                            color: isRight ? '#4ade80' : isBad ? '#f87171' : isSelected ? '#f59e0b' : '#8892a4',
                          }}>
                          {val ? 'True' : 'False'}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Fill in the Blank */}
                {q.type === 'fillblank' && (
                  <div>
                    <input
                      type="text"
                      placeholder="Type your answer..."
                      value={userAns || ''}
                      onChange={e => handleAnswer(qi, e.target.value)}
                      disabled={submitted}
                      style={{
                        width:'100%', padding:'10px 14px', borderRadius:'8px', fontSize:'13px',
                        background:'rgba(255,255,255,0.04)', outline:'none', fontFamily:"'DM Sans',sans-serif",
                        border: `1px solid ${submitted ? (isCorrect ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.35)') : 'rgba(255,255,255,0.12)'}`,
                        color: submitted ? (isCorrect ? '#4ade80' : '#f87171') : '#e8eaf0',
                        boxSizing:'border-box',
                      }}
                    />
                    {submitted && !isCorrect && (
                      <div style={{ fontSize:'12px', color:'#4ade80', marginTop:'.4rem' }}>
                        ✓ Correct answer: <strong>{String(q.answer)}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Correct answer reveal after submit */}
                {submitted && isCorrect && (
                  <div style={{ fontSize:'11px', color:'#4ade80', marginTop:'.6rem', fontWeight:600 }}>✓ Correct</div>
                )}
                {submitted && isWrong && q.type !== 'fillblank' && (
                  <div style={{ fontSize:'11px', color:'#f59e0b', marginTop:'.6rem' }}>
                    Correct answer: <strong style={{ color:'#4ade80' }}>{String(q.answer)}</strong>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit button */}
        {!submitted && (
          <div style={{ marginTop:'2rem', textAlign:'center' }}>
            <button onClick={handleSubmit}
              disabled={Object.keys(answers).length < quiz.questions.length}
              style={{
                background: Object.keys(answers).length >= quiz.questions.length ? '#f59e0b' : 'rgba(255,255,255,0.06)',
                color: Object.keys(answers).length >= quiz.questions.length ? '#000' : '#4a5568',
                border:'none', padding:'14px 40px', borderRadius:'10px', fontSize:'15px', fontWeight:700,
                cursor: Object.keys(answers).length >= quiz.questions.length ? 'pointer' : 'not-allowed',
                fontFamily:"'DM Sans',sans-serif", transition:'background .2s',
              }}>
              Submit Quiz ({Object.keys(answers).length}/{quiz.questions.length} answered)
            </button>
            {Object.keys(answers).length < quiz.questions.length && (
              <div style={{ fontSize:'12px', color:'#8892a4', marginTop:'.5rem' }}>
                Answer all {quiz.questions.length} questions to submit
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}
