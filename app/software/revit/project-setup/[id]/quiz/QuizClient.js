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

export default function SetupQuizClient(props) {
  return (
    <AdminOnlyGate title="Revit Project Setup" backHref="/software/revit/project-setup" backLabel="← Back to Project Setup">
      <SetupQuizClientInner {...props} />
    </AdminOnlyGate>
  );
}

function SetupQuizClientInner({ quiz, lesson }) {
  const router = useRouter();
  const [activePlan, setActivePlan] = useState('free');
  const [answers,    setAnswers]    = useState({});
  const [submitted,  setSubmitted]  = useState(false);
  const [score,      setScore]      = useState(0);
  const [passed,     setPassed]     = useState(false);
  const [loading,    setLoading]    = useState(true);
  const [user,       setUser]       = useState(null);

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

    const total   = quiz.questions.length;
    const pct     = Math.round((correct / total) * 100);
    const didPass = pct >= quiz.passingScore;

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

  const answeredCount = Object.keys(answers).length;
  const allAnswered   = answeredCount >= quiz.questions.length;

  // Locked
  if (!loading && !accessible) {
    return (
      <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>
        <div style={{ maxWidth:'720px', margin:'0 auto', padding:'4rem 2rem', textAlign:'center' }}>
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔒</div>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.4rem', marginBottom:'.75rem' }}>Quiz Locked</h2>
          <p style={{ color:'#8892a4', fontSize:'14px', marginBottom:'2rem' }}>Upgrade your plan to access this quiz.</p>
          <Link href="/pricing" style={{ background:'#10b981', color:'#000', padding:'12px 28px', borderRadius:'8px', fontWeight:600, textDecoration:'none', fontSize:'14px' }}>
            Upgrade Now →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background:'#0a0e1a', color:'#e8eaf0', minHeight:'100vh', paddingTop:'80px', fontFamily:"'DM Sans',sans-serif" }}>

      {/* Top bar */}
      <div style={{ borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'.85rem 2rem', display:'flex', alignItems:'center', gap:'1.25rem', maxWidth:'1100px', margin:'0 auto', fontSize:'13px', color:'#8892a4', flexWrap:'wrap' }}>
        <Link href={`/software/revit/project-setup/${lesson.id}`} style={{ color:'#8892a4', textDecoration:'none' }}>
          ← Back to Lesson
        </Link>
        <span style={{ color:'rgba(255,255,255,0.12)' }}>|</span>
        <span style={{ color:'#e8eaf0' }}>{lesson.title}</span>
      </div>

      <div style={{ maxWidth:'720px', margin:'0 auto', padding:'3rem 2rem 5rem' }}>

        {/* Quiz header */}
        <div style={{ marginBottom:'2rem' }}>
          <div style={{ fontSize:'11px', fontWeight:500, letterSpacing:'2px', textTransform:'uppercase', color:'#10b981', marginBottom:'.4rem' }}>
            Revit Project Setup · Quiz
          </div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.8rem', letterSpacing:'-.3px', marginBottom:'.5rem' }}>
            {quiz.title}
          </h1>
          <p style={{ color:'#8892a4', fontSize:'13px' }}>
            {quiz.questions.length} questions · {quiz.passingScore}% to pass · Select or type one answer per question
          </p>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div style={{ marginBottom:'1.5rem' }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'12px', color:'#8892a4', marginBottom:'6px' }}>
              <span>{answeredCount} of {quiz.questions.length} answered</span>
              <span>{Math.round((answeredCount / quiz.questions.length) * 100)}%</span>
            </div>
            <div style={{ height:'4px', background:'rgba(255,255,255,0.06)', borderRadius:'2px', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${(answeredCount / quiz.questions.length) * 100}%`, background:'linear-gradient(90deg,#10b981,#34d399)', borderRadius:'2px', transition:'width .3s' }} />
            </div>
          </div>
        )}

        {/* Result banner */}
        {submitted && (
          <div style={{
            background: passed ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${passed ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}`,
            borderRadius:'14px', padding:'1.75rem', marginBottom:'2rem',
            display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'.75rem',
          }}>
            <div style={{ fontSize:'2.5rem' }}>{passed ? '🎉' : '📚'}</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.3rem' }}>
              {passed ? 'Quiz Passed!' : 'Keep Practicing'}
            </div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'2.5rem', color: passed ? '#10b981' : '#f87171' }}>
              {score}%
            </div>
            <div style={{ fontSize:'13px', color:'#8892a4' }}>
              {passed
                ? `Excellent! You scored ${score}% and passed with ${quiz.passingScore}% required.`
                : `You scored ${score}%. You need ${quiz.passingScore}% to pass. Review the lesson and try again.`
              }
            </div>
            <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap', justifyContent:'center', marginTop:'.5rem' }}>
              <button onClick={handleRetake}
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#e8eaf0', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:500, cursor:'pointer', fontFamily:"'DM Sans',sans-serif" }}>
                Retake Quiz
              </button>
              {passed && lesson.next && (
                <Link href={`/software/revit/project-setup/${lesson.next}`}
                  style={{ background:'#10b981', color:'#000', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:700, textDecoration:'none' }}>
                  Next Lesson →
                </Link>
              )}
              <Link href="/software/revit/project-setup"
                style={{ background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.2)', color:'#10b981', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:500, textDecoration:'none' }}>
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
                border:`1px solid ${submitted ? (isCorrect ? 'rgba(16,185,129,0.3)' : isWrong ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.08)') : 'rgba(255,255,255,0.08)'}`,
                borderRadius:'14px', padding:'1.25rem',
                transition:'border-color .2s',
              }}>
                {/* Question */}
                <div style={{ display:'flex', gap:'10px', marginBottom:'1rem', alignItems:'flex-start' }}>
                  <span style={{
                    background:'rgba(16,185,129,0.12)', color:'#10b981',
                    border:'1px solid rgba(16,185,129,0.25)',
                    borderRadius:'6px', padding:'2px 9px',
                    fontSize:'11px', fontWeight:700, flexShrink:0, marginTop:'2px',
                  }}>
                    Q{qi + 1}
                  </span>
                  <div style={{ fontSize:'14px', color:'#e8eaf0', lineHeight:'1.65', fontWeight:500 }}>{q.question}</div>
                </div>

                {/* MCQ */}
                {q.type === 'mcq' && (
                  <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
                    {q.options.map((opt, oi) => {
                      const isSelected = userAns === opt;
                      const isRight    = submitted && opt === q.answer;
                      const isBad      = submitted && isSelected && opt !== q.answer;
                      return (
                        <div key={oi} onClick={() => handleAnswer(qi, opt)}
                          style={{
                            padding:'10px 14px', borderRadius:'8px', fontSize:'13px',
                            cursor: submitted ? 'default' : 'pointer',
                            display:'flex', alignItems:'center', gap:'10px',
                            background: isRight ? 'rgba(16,185,129,0.12)' : isBad ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isRight ? 'rgba(16,185,129,0.4)' : isBad ? 'rgba(239,68,68,0.35)' : isSelected ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.07)'}`,
                            color: isRight ? '#10b981' : isBad ? '#f87171' : isSelected ? '#34d399' : '#c8d0e8',
                            transition:'all .15s',
                          }}>
                          <span style={{ fontSize:'11px', fontWeight:700, width:'18px', flexShrink:0, color:'inherit' }}>
                            {isRight ? '✓' : isBad ? '✗' : String.fromCharCode(65 + oi)}
                          </span>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* True / False */}
                {q.type === 'truefalse' && (
                  <div style={{ display:'flex', gap:'.75rem' }}>
                    {[true, false].map(val => {
                      const isSelected = userAns === val;
                      const isRight    = submitted && val === q.answer;
                      const isBad      = submitted && isSelected && val !== q.answer;
                      return (
                        <div key={String(val)} onClick={() => handleAnswer(qi, val)}
                          style={{
                            flex:1, padding:'10px', borderRadius:'8px', textAlign:'center',
                            fontSize:'13px', fontWeight:600,
                            cursor: submitted ? 'default' : 'pointer',
                            background: isRight ? 'rgba(16,185,129,0.12)' : isBad ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${isRight ? 'rgba(16,185,129,0.4)' : isBad ? 'rgba(239,68,68,0.35)' : isSelected ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.07)'}`,
                            color: isRight ? '#10b981' : isBad ? '#f87171' : isSelected ? '#34d399' : '#8892a4',
                            transition:'all .15s',
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
                        background:'rgba(255,255,255,0.04)', outline:'none',
                        fontFamily:"'DM Sans',sans-serif", boxSizing:'border-box',
                        border: `1px solid ${submitted ? (isCorrect ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)') : 'rgba(255,255,255,0.12)'}`,
                        color: submitted ? (isCorrect ? '#10b981' : '#f87171') : '#e8eaf0',
                      }}
                    />
                    {submitted && !isCorrect && (
                      <div style={{ fontSize:'12px', color:'#10b981', marginTop:'.4rem' }}>
                        ✓ Correct answer: <strong>{String(q.answer)}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Result indicator */}
                {submitted && isCorrect && (
                  <div style={{ fontSize:'11px', color:'#10b981', marginTop:'.6rem', fontWeight:600 }}>✓ Correct</div>
                )}
                {submitted && isWrong && q.type !== 'fillblank' && (
                  <div style={{ fontSize:'11px', color:'#8892a4', marginTop:'.6rem' }}>
                    Correct answer: <strong style={{ color:'#10b981' }}>{String(q.answer)}</strong>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit */}
        {!submitted && (
          <div style={{ marginTop:'2rem', textAlign:'center' }}>
            <button onClick={handleSubmit} disabled={!allAnswered}
              style={{
                background: allAnswered ? '#10b981' : 'rgba(255,255,255,0.06)',
                color: allAnswered ? '#000' : '#4a5568',
                border:'none', padding:'14px 44px', borderRadius:'10px',
                fontSize:'15px', fontWeight:700,
                cursor: allAnswered ? 'pointer' : 'not-allowed',
                fontFamily:"'DM Sans',sans-serif", transition:'background .2s',
              }}>
              Submit Quiz ({answeredCount}/{quiz.questions.length} answered)
            </button>
            {!allAnswered && (
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