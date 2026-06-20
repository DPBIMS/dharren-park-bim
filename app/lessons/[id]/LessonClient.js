'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

export default function LessonClient({ lesson, allLessons }) {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState(lesson.sections?.[0]?.id || '');

  useEffect(() => {
    async function checkProgress() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from('lesson_progress')
        .select('completed')
        .eq('user_id', user.id)
        .eq('lesson_id', lesson.id)
        .single();
      if (data?.completed) setCompleted(true);
    }
    checkProgress();
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

  function renderContent(text) {
    if (!text) return null;
    return text.split('**').map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  }

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* TOP BAR */}
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <Link href="/lessons" className={styles.backBtn}>← Back to Lessons</Link>
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
              {lesson.prev ? (
                <Link href={`/lessons/${lesson.prev.id}`} className={styles.navCard}>
                  <div className={styles.navDirection}>← Previous</div>
                  <div className={styles.navLessonTitle}>{lesson.prev.title}</div>
                </Link>
              ) : (
                <div className={`${styles.navCard} ${styles.navDisabled}`}>
                  <div className={styles.navDirection}>← Previous</div>
                  <div className={styles.navLessonTitle}>No previous lesson</div>
                </div>
              )}

              {lesson.next ? (
                <Link href={`/lessons/${lesson.next.id}`} className={`${styles.navCard} ${styles.navCardNext}`}>
                  <div className={styles.navDirection}>Next →</div>
                  <div className={styles.navLessonTitle}>{lesson.next.title}</div>
                </Link>
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
                <Link key={l.id} href={`/lessons/${l.id}`} className={styles.relatedItem}>
                  <span className={styles.relatedNum}>{l.num}</span>
                  <span className={`${styles.relatedDot} ${l.id === lesson.id ? styles.dotCurrent : styles.dotNext}`} />
                  <span>{l.title.split(':')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {lesson.resource && (
            <div className={`${styles.sidebarCard} ${styles.resourceSidebar}`}>
              <div className={styles.sidebarTitle}>📄 Lesson Resource</div>
              <p className={styles.resourceDesc}>
                Download the {lesson.resource.label} for this lesson.
              </p>
              <button className={styles.downloadBtn}>
                Download {lesson.resource.type} ↓
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}