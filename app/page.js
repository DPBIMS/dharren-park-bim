import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem' }}>
        <p style={{ color: '#888', fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
          BUILDING INFORMATION MODELING
        </p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1.2, marginBottom: '1.5rem' }}>
          Master BIM with a<br />
          <span style={{ color: '#4ade80' }}>Senior Specialist</span>
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
          Learn Revit, BIM workflows, and industry-standard techniques from real project experience.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/lessons" style={{
            background: '#4ade80', color: '#000', padding: '0.8rem 2rem',
            borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
          }}>
            View Lessons
          </Link>
          <Link href="/pricing" style={{
            border: '1px solid #444', color: '#fff', padding: '0.8rem 2rem',
            borderRadius: '6px', textDecoration: 'none', fontSize: '1rem'
          }}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '🏗️', title: 'Real BIM Projects', desc: 'Learn from actual construction and design projects.' },
            { icon: '🎓', title: 'Expert Instructor', desc: 'Taught by a certified BIM Senior Specialist.' },
            { icon: '📐', title: 'Revit Mastery', desc: 'Step-by-step Revit training from beginner to advanced.' },
            { icon: '🏆', title: 'Certificate', desc: 'Earn a certificate upon completing the program.' },
          ].map((f, i) => (
            <div key={i} style={{
              background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '2rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: '#888', fontSize: '0.95rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}