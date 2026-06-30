'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function NavisworksQuizClient({ quiz, lesson }) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user,         setUser]         = useState(null);
  const [current,      setCurrent]      = useState(0);
  const [answers,      setAnswers]      = useState({});
  const [fillValue,    setFillValue]    = useState('');
  const [submitted,    setSubmitted]    = useState(false);
  const [result,       setResult]       = useState(null);
  const [saving,       setSaving]       = useState(false);

  const normalizedQuestions = quiz.questions.map((q, i) => {
    let correct = q.correct !== undefined ? q.correct : q.answer;
    if (q.type === 'mcq' && typeof correct === 'string') {
      correct = q.options.indexOf(correct);
    }
    return { ...q, id: q.id || `q${i + 1}`, correct };
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) { router.push('/login'); return; }
      setUser(data.user);
      setCheckingAuth(false);
    });
  }, [router]);

  const totalQuestions = normalizedQuestions.length;
  const question       = normalizedQuestions[current];
  const isLast         = current === totalQuestions - 1;
  const isAnswered     = question?.type === 'fillblank'
    ? fillValue.trim() !== ''
    : answers[question?.id] !== undefined;

  function selectMcq(optIndex) {
    setAnswers(a => ({ ...a, [question.id]: optIndex }));
  }
  function selectTrueFalse(val) {
    setAnswers(a => ({ ...a, [question.id]: val }));
  }

  function goNext() {
    if (question.type === 'fillblank' && fillValue.trim() !== '' && answers[question.id] === undefined) {
      setAnswers(a => ({ ...a, [question.id]: fillValue.trim().toLowerCase() }));
    }
    if (isLast) finishQuiz();
    else { setCurrent(c => c + 1); setFillValue(''); }
  }

  function goBack() {
    if (current > 0) { setCurrent(c => c - 1); setFillValue(''); }
  }

  async function finishQuiz() {
    let finalAnswers = { ...answers };
    if (question.type === 'fillblank' && fillValue.trim() !== '') {
      finalAnswers[question.id] = fillValue.trim().toLowerCase();
    }

    let correctCount = 0;
    normalizedQuestions.forEach(q => {
      const ua = finalAnswers[q.id];
      if (q.type === 'mcq')       { if (ua === q.correct) correctCount++; }
      else if (q.type === 'truefalse') { if (ua === q.correct) correctCount++; }
      else if (q.type === 'fillblank') {
        if (typeof ua === 'string' && ua.toLowerCase() === q.correct.toLowerCase()) correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / totalQuestions) * 100);
    const passed   = scorePct >= quiz.passingScore;

    setResult({ correctCount, totalQuestions, scorePct, passed });
    setSubmitted(true);
    setSaving(true);

    try {
      await supabase.from('quiz_attempts').insert({
        user_id:         user.id,
        lesson_id:       lesson.id,
        score:           scorePct,
        total_questions: totalQuestions,
        passed,
        answers:         finalAnswers,
      });

      if (passed) {
        await supabase.from('lesson_progress').upsert({
          user_id:    user.id,
          lesson_id:  lesson.id,
          completed:  true,
          quiz_passed: true,
          best_score: scorePct,
        }, { onConflict: 'user_id,lesson_id' });
      }
    } catch (err) {
      console.error('Error saving quiz result:', err);
    }
    setSaving(false);
  }

  function retakeQuiz() {
    setCurrent(0); setAnswers({}); setFillValue(''); setSubmitted(false); setResult(null);
  }

  if (checkingAuth) return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892a4', fontFamily: "'DM Sans',sans-serif" }}>
      Loading...
    </main>
  );

  return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', color: '#e8eaf0', fontFamily: "'DM Sans',sans-serif", paddingTop: '80px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href={`/software/navisworks/getting-started/${lesson.id}`} style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}>
            ← Back to Lesson {lesson.num}
          </Link>
        </div>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.3px', marginBottom: '.4rem' }}>{quiz.title}</h1>
              <p style={{ fontSize: '13px', color: '#8892a4' }}>Question {current + 1} of {totalQuestions} · Passing score: {quiz.passingScore}%</p>
            </div>

            {/* Progress bar */}
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', marginBottom: '2rem', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.round((current / totalQuestions) * 100)}%`, background: '#2563eb', borderRadius: '2px', transition: 'width 0.3s' }} />
            </div>

            {/* Question card */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3b82f6', marginBottom: '.75rem' }}>
                {question.type === 'mcq' ? 'Multiple Choice' : question.type === 'truefalse' ? 'True or False' : 'Fill in the Blank'}
              </div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.4, marginBottom: '1.75rem' }}>{question.question}</h2>

              {question.type === 'mcq' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                  {question.options.map((opt, i) => (
                    <button key={i} onClick={() => selectMcq(i)} style={{
                      textAlign: 'left', padding: '.85rem 1.1rem', borderRadius: '10px',
                      border: `1px solid ${answers[question.id] === i ? '#2563eb' : 'rgba(255,255,255,0.08)'}`,
                      background: answers[question.id] === i ? 'rgba(37,99,235,0.1)' : 'rgba(255,255,255,0.03)',
                      color: '#e8eaf0', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                      display: 'flex', alignItems: 'center', gap: '.75rem',
                    }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, border: `1.5px solid ${answers[question.id] === i ? '#2563eb' : 'rgba(255,255,255,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {answers[question.id] === i && <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', display: 'block' }} />}
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {question.type === 'truefalse' && (
                <div style={{ display: 'flex', gap: '.75rem' }}>
                  {[true, false].map(val => (
                    <button key={String(val)} onClick={() => selectTrueFalse(val)} style={{
                      flex: 1, padding: '1rem', borderRadius: '10px',
                      border: `1px solid ${answers[question.id] === val ? '#2563eb' : 'rgba(255,255,255,0.08)'}`,
                      background: answers[question.id] === val ? 'rgba(37,99,235,0.1)' : 'rgba(255,255,255,0.03)',
                      color: '#e8eaf0', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                    }}>{val ? 'True' : 'False'}</button>
                  ))}
                </div>
              )}

              {question.type === 'fillblank' && (
                <input type="text" placeholder="Type your answer..." value={fillValue} onChange={e => setFillValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && isAnswered && goNext()}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '.85rem 1.1rem', color: '#e8eaf0', fontSize: '14px', fontFamily: "'DM Sans',sans-serif", outline: 'none' }}
                />
              )}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <button onClick={goBack} disabled={current === 0} style={{ padding: '.7rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', background: 'transparent', color: current === 0 ? '#4a5568' : '#8892a4', fontSize: '13px', fontWeight: 500, cursor: current === 0 ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                ← Back
              </button>
              <button onClick={goNext} disabled={!isAnswered} style={{ padding: '.7rem 1.75rem', borderRadius: '8px', border: 'none', background: isAnswered ? '#2563eb' : 'rgba(255,255,255,0.06)', color: isAnswered ? '#fff' : '#4a5568', fontSize: '13px', fontWeight: 600, cursor: isAnswered ? 'pointer' : 'not-allowed', fontFamily: "'DM Sans',sans-serif" }}>
                {isLast ? 'Submit Quiz' : 'Next →'}
              </button>
            </div>
          </>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{result.passed ? '🎉' : '📝'}</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.5rem', marginBottom: '.5rem' }}>
              {result.passed ? 'Quiz Passed!' : 'Almost There'}
            </h2>
            <p style={{ color: '#8892a4', fontSize: '14px', marginBottom: '1.5rem' }}>
              You scored {result.correctCount} out of {result.totalQuestions} ({result.scorePct}%)
            </p>

            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden', marginBottom: '.75rem' }}>
                <div style={{ height: '100%', width: `${result.scorePct}%`, borderRadius: '4px', background: result.passed ? '#4ade80' : '#f59e0b', transition: 'width 0.5s' }} />
              </div>
              <div style={{ fontSize: '12px', color: '#8892a4' }}>Passing score required: {quiz.passingScore}%</div>
            </div>

            {result.passed ? (
              <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '10px', padding: '1rem', marginBottom: '1.5rem', fontSize: '13px', color: '#4ade80' }}>
                ✓ Lesson marked as complete! Continue to the next lesson.
              </div>
            ) : (
              <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '10px', padding: '1rem', marginBottom: '1.5rem', fontSize: '13px', color: '#f59e0b' }}>
                You need {quiz.passingScore}% to pass. Review the lesson and try again!
              </div>
            )}

            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={retakeQuiz} style={{ padding: '.75rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', background: 'transparent', color: '#e8eaf0', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                Retake Quiz
              </button>
              {result.passed && lesson.next ? (
                <Link href={`/software/navisworks/getting-started/${typeof lesson.next === 'string' ? lesson.next : lesson.next.id}`} style={{ padding: '.75rem 1.5rem', borderRadius: '8px', background: '#2563eb', color: '#fff', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                  Next Lesson →
                </Link>
              ) : (
                <Link href={`/software/navisworks/getting-started/${lesson.id}`} style={{ padding: '.75rem 1.5rem', borderRadius: '8px', background: '#2563eb', color: '#fff', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                  Review Lesson
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
