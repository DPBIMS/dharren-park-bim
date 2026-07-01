'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './lesson.module.css';

const topicClass = {
  revit:        styles.tagRevit,
  standards:    styles.tagStandards,
  coordination: styles.tagCoordination,
  navisworks:   styles.tagNavisworks,
  bim360:       styles.tagBim360,
  ifc:          styles.tagIfc,
  general:      styles.tagGeneral,
};
const topicLabel = {
  revit:        'Revit',
  standards:    'BIM Standards',
  coordination: 'Coordination',
  navisworks:   'Navisworks',
  bim360:       'BIM 360',
  ifc:          'IFC',
  general:      'General BIM',
};

// Same plan access rules as dashboard and lessons page
const PLAN_ACCESS = {
  free:    (lesson) => lesson.free,
  basic:   (lesson) => lesson.cat === 'beginner',
  pro:     (lesson) => lesson.cat === 'beginner' || lesson.cat === 'intermediate',
  premium: ()       => true,
};

// Entry points that link into a lesson with ?from=<key> get their own
// "back" destination instead of always returning to the general library.
const LIBRARY_ORIGINS = {
  'bim-basics': { href: '/learn/bim-basics', label: '← Back to BIM Basics' },
};

export default function LessonClient({ lesson, allLessons }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = LIBRARY_ORIGINS[searchParams.get('from')] || { href: '/lessons', label: '← Back to Lessons' };
  const fromQuery = searchParams.get('from') ? `?from=${searchParams.get('from')}` : '';
  const [completed,     setCompleted]     = useState(false);
  const [activeSection, setActiveSection] = useState(lesson.sections?.[0]?.id || '');
  const [activePlan,    setActivePlan]    = useState('free');
  const [planLoaded,    setPlanLoaded]    = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Load plan from user_plans
      const { data: planData } = await supabase
        .from('user_plans').select('plan')
        .eq('user_id', user.id).eq('status', 'active').single();

      if (planData?.plan) {
        setActivePlan(planData.plan);
      } else {
        const { data: profile } = await supabase
          .from('profiles').select('plan').eq('id', user.id).single();
        setActivePlan(profile?.plan || 'free');
      }
      setPlanLoaded(true);

      // Check lesson completion
      const { data } = await supabase
        .from('lesson_progress')
        .select('completed')
        .eq('user_id', user.id)
        .eq('lesson_id', lesson.id)
        .single();
      if (data?.completed) setCompleted(true);
    }
    load();
  }, [lesson.id]);

  async function toggleComplete() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/login'); return; }
    if (completed) {
      await supabase.from('lesson_progress').delete()
        .eq('user_id', user.id).eq('lesson_id', lesson.id);
      setCompleted(false);
    } else {
      await supabase.from('lesson_progress').upsert({
        user_id: user.id, lesson_id: lesson.id, completed: true,
      });
      setCompleted(true);
    }
  }

  function canAccess(lessonToCheck) {
    if (!lessonToCheck) return false;
    const checker = PLAN_ACCESS[activePlan] || PLAN_ACCESS.free;
    return checker(lessonToCheck);
  }

  function renderContent(text) {
    if (!text) return null;
    return text.split('**').map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  }

  // Find next/prev lesson objects from allLessons for access checking
  const nextLesson = lesson.next ? allLessons.find(l => l.id === lesson.next.id) : null;
  const nextIsLocked = planLoaded && nextLesson && !canAccess(nextLesson);

  return (
    <div>
      {/* TOP BAR */}
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <Link href={origin.href} className={styles.backBtn}>{origin.label}</Link>
          <div className={styles.topbarDivider} />
          <div className={styles.topbarLesson}>
            Lesson <strong>{lesson.num}</strong> of {allLessons.length}
          </div>
        </div>
        <div className={styles.topbarRight}>
          <button
            className={`${styles.completeBtn} ${completed ? styles.completeBtnDone : ''}`}
            onClick={toggleComplete}
          >
            <span>{completed ? '✓' : '○'}</span>
            <span>{completed ? 'Completed!' : 'Mark as Complete'}</span>
          </button>
        </div>
      </div>

      <div className={styles.lessonLayout}>

        {/* MAIN CONTENT */}
        <div className={styles.lessonContent}>

          {/* META TAGS */}
          <div className={styles.lessonMeta}>
            <span className={`${styles.metaTag} ${topicClass[lesson.topic]}`}>
              {topicLabel[lesson.topic]}
            </span>
            <span className={styles.metaLevel}>{lesson.cat}</span>
            <span className={styles.metaRead}>⏱ {lesson.readTime} read</span>
            {lesson.free && <span className={styles.freeTag}>FREE</span>}
          </div>

          <div className={styles.lessonNum}>Lesson {lesson.num}</div>
          <h1 className={styles.lessonTitle}>{lesson.title}</h1>
          <p className={styles.lessonIntro}>{lesson.intro}</p>

          {/* SECTIONS */}
          <div className={styles.contentBody}>
            {lesson.sections?.map(section => (
              <div key={section.id} id={section.id}>
                <h2>{section.heading}</h2>

                {section.content && <p>{renderContent(section.content)}</p>}

                {section.subsections?.map((sub, i) => (
                  <div key={i}>
                    <h3>{sub.heading}</h3>
                    <ul>
                      {sub.items.map((item, j) => (
                        <li key={j}>{renderContent(item)}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.items && (
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>{renderContent(item)}</li>
                    ))}
                  </ul>
                )}

                {section.formula && (
                  <div className={styles.formulaBlock}>
                    <div className={styles.formulaLabel}>{section.formula.label}</div>
                    <div className={styles.formulaText}>{section.formula.text}</div>
                  </div>
                )}

                {section.code && (
                  <div className={styles.codeBlock}>
                    <div className={styles.codeLabel}>{section.code.label}</div>
                    <pre>{section.code.lines.join('\n')}</pre>
                  </div>
                )}

                {section.image && (
                  <div className={styles.imgBlock}>
                    <div className={styles.imgPlaceholder}>🏗️</div>
                    <div className={styles.imgCaption}>{section.image.caption}</div>
                  </div>
                )}
              </div>
            ))}

            {/* KEY TAKEAWAYS */}
            {lesson.takeaways && (
              <div className={styles.takeawaysBox}>
                <div className={styles.takeawaysTitle}>💡 Key Takeaways</div>
                <div className={styles.takeawaysList}>
                  {lesson.takeaways.map((t, i) => (
                    <div key={i} className={styles.takeawayItem}>
                      <span className={styles.tkIcon}>✓</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* QUIZ CTA */}
            {lesson.quiz && (
              <div className={styles.quizCta}>
                <div className={styles.quizCtaText}>
                  <h3>Ready to test your knowledge?</h3>
                  <p>Take the {lesson.quiz.label} — {lesson.quiz.questions} questions, about {lesson.quiz.time}.</p>
                </div>
                <Link href={`/quizzes/${lesson.id}`} className={styles.quizStartBtn}>
                  Take Quiz →
                </Link>
              </div>
            )}

            {/* PREV / NEXT */}
            <div className={styles.lessonNav}>
              {/* Previous */}
              {lesson.prev ? (
                <Link href={`/lessons/${lesson.prev.id}${fromQuery}`} className={styles.navCard}>
                  <div className={styles.navDirection}>← Previous</div>
                  <div className={styles.navLessonTitle}>{lesson.prev.title}</div>
                </Link>
              ) : (
                <div className={`${styles.navCard} ${styles.navDisabled}`}>
                  <div className={styles.navDirection}>← Previous</div>
                  <div className={styles.navLessonTitle}>No previous lesson</div>
                </div>
              )}

              {/* Next — locked or accessible */}
              {lesson.next ? (
                nextIsLocked ? (
                  // Locked: show upgrade prompt instead of navigation
                  <Link href="/pricing" className={`${styles.navCard} ${styles.navCardNext}`}
                    style={{ borderColor:'rgba(245,158,11,0.3)', background:'rgba(245,158,11,0.04)' }}>
                    <div className={styles.navDirection} style={{ color:'#f59e0b' }}>🔒 Upgrade to unlock</div>
                    <div className={styles.navLessonTitle} style={{ color:'#8892a4' }}>{lesson.next.title}</div>
                    <div style={{ fontSize:'11px', color:'#f59e0b', marginTop:'4px', fontWeight:500 }}>View Plans →</div>
                  </Link>
                ) : (
                  <Link href={`/lessons/${lesson.next.id}${fromQuery}`} className={`${styles.navCard} ${styles.navCardNext}`}>
                    <div className={styles.navDirection}>Next →</div>
                    <div className={styles.navLessonTitle}>{lesson.next.title}</div>
                  </Link>
                )
              ) : (
                <div className={`${styles.navCard} ${styles.navCardNext} ${styles.navDisabled}`}>
                  <div className={styles.navDirection}>Next →</div>
                  <div className={styles.navLessonTitle}>No next lesson</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className={styles.lessonSidebar}>

          {lesson.sections?.length > 0 && (
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarTitle}>📋 In This Lesson</div>
              <div className={styles.tocList}>
                {lesson.sections.map(s => (
                  <div
                    key={s.id}
                    className={`${styles.tocItem} ${activeSection === s.id ? styles.tocItemActive : ''}`}
                    onClick={() => {
                      setActiveSection(s.id);
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {s.heading}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.sidebarCard}>
            <div className={styles.sidebarTitle}>📚 Related Lessons</div>
            <div className={styles.relatedList}>
              {allLessons.slice(0, 5).map(l => (
                <Link key={l.id} href={`/lessons/${l.id}${fromQuery}`} className={styles.relatedItem}>
                  <span className={styles.relatedNum}>{l.num}</span>
                  <span className={`${styles.relatedDot} ${l.id === lesson.id ? styles.dotCurrent : styles.dotNext}`} />
                  <span>{l.title.split(':')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}