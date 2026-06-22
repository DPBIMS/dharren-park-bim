'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const plans = [
  { name: 'basic',   label: 'Basic',   desc: 'For beginners starting their BIM journey.',       monthly: 299,  annual: 239,  features: ['Full access to BIM articles','Core lessons & topics','Beginner learning path'],                                              unavail: ['Downloadable PDFs','Quizzes & assessments','Video lessons'],          featured: false },
  { name: 'pro',     label: 'Pro',     desc: 'For students serious about BIM careers.',          monthly: 599,  annual: 479,  features: ['Everything in Basic','Downloadable PDFs','Quizzes & assessments','Intermediate lessons'],                                   unavail: ['Video lessons','3D model resources'],                                  featured: true  },
  { name: 'premium', label: 'Premium', desc: 'Full access to everything, now and future.',       monthly: 999,  annual: 799,  features: ['Everything in Pro','Video lessons (coming soon)','3D model resources','Priority support','Early access','Certificate'],     unavail: [],                                                                     featured: false },
];

const methods = [
  { id: 'gcash',  icon: '💙', name: 'GCash',          sub: 'Send to 09XX XXX XXXX',      bg: 'rgba(0,136,255,0.12)'   },
  { id: 'maya',   icon: '💚', name: 'Maya (PayMaya)',  sub: 'Send to 09XX XXX XXXX',      bg: 'rgba(0,180,100,0.12)'   },
  { id: 'bank',   icon: '🏦', name: 'Bank Transfer',   sub: 'BDO / BPI / UnionBank',      bg: 'rgba(245,158,11,0.12)'  },
  { id: 'paypal', icon: '🔵', name: 'PayPal',          sub: 'paypal.me/dharrenparkbim',   bg: 'rgba(0,48,135,0.18)'    },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedMethod, setSelectedMethod] = useState('gcash');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [ref, setRef] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        setUser(data.user);
        setEmail(data.user.email || '');
        const meta = data.user.user_metadata;
        if (meta?.first_name) setFullName(`${meta.first_name} ${meta.last_name || ''}`.trim());
      }
    });
  }, []);

  const plan = plans.find(p => p.name === selectedPlan);
  const price = annual ? plan.annual : plan.monthly;

  const handleSubmit = async () => {
    if (!email || !ref) { setError('Please enter your email and reference number.'); return; }
    if (!email.includes('@')) { setError('Enter a valid email address.'); return; }
    setError(''); setLoading(true);

    try {
      let userId = user?.id;

      if (!userId) {
        const { data } = await supabase.auth.getUser();
        userId = data?.user?.id;
      }

      if (!userId) {
        setError('Please log in first before submitting payment.');
        setLoading(false);
        return;
      }

      const { error: insertError } = await supabase
        .from('payment_submissions')
        .insert({
          user_id: userId,
          email,
          full_name: fullName,
          plan: selectedPlan,
          billing: annual ? 'annual' : 'monthly',
          amount: price,
          payment_method: selectedMethod,
          reference_number: ref.trim(),
          status: 'pending',
        });

      if (insertError) throw insertError;
      setSubmitted(true);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const inp = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '9px 12px', color: '#e8eaf0', fontSize: '13px', fontFamily: "'DM Sans',sans-serif", outline: 'none', width: '100%' };

  return (
    <main style={{ background: '#0a0e1a', color: '#e8eaf0', minHeight: '100vh', paddingTop: '80px', fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>

        {/* Header */}
        <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#3b82f6', marginBottom: '.5rem' }}>Enrollment Plans</div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '2rem', fontWeight: 800, letterSpacing: '-.5px', marginBottom: '.4rem' }}>Simple, Honest Pricing</h1>
        <p style={{ color: '#8892a4', fontSize: '14px', marginBottom: '2rem' }}>Choose the plan that fits your learning goals. Upgrade anytime.</p>

        {/* Billing Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '13px', fontWeight: 500, color: !annual ? '#e8eaf0' : '#8892a4' }}>Monthly</span>
          <div onClick={() => setAnnual(!annual)} style={{ position: 'relative', width: '44px', height: '24px', background: annual ? '#2563eb' : '#334155', borderRadius: '100px', cursor: 'pointer', transition: 'background .2s' }}>
            <div style={{ position: 'absolute', top: '3px', left: '3px', width: '18px', height: '18px', background: '#fff', borderRadius: '50%', transition: 'transform .25s', transform: annual ? 'translateX(20px)' : 'none' }} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: 500, color: annual ? '#e8eaf0' : '#8892a4' }}>Annual</span>
          <span style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, color: '#f59e0b' }}>Save 20%</span>
        </div>

        {/* Plans Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {plans.map(p => (
            <div key={p.name} onClick={() => setSelectedPlan(p.name)} style={{
              background: selectedPlan === p.name ? 'rgba(37,99,235,0.07)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${selectedPlan === p.name ? '#2563eb' : p.featured ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '16px', padding: '1.75rem', position: 'relative', cursor: 'pointer', transition: 'all .2s',
            }}>
              {p.featured && <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: '#fff', fontSize: '10px', fontWeight: 600, padding: '3px 12px', borderRadius: '100px', whiteSpace: 'nowrap' }}>Most Popular</div>}
              {selectedPlan === p.name && <div style={{ position: 'absolute', top: '14px', right: '14px', width: '18px', height: '18px', borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</div>}
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '15px', marginBottom: '.2rem' }}>{p.label}</div>
              <div style={{ fontSize: '12px', color: '#8892a4', marginBottom: '1.25rem' }}>{p.desc}</div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: '2rem', fontWeight: 800 }}>₱{annual ? p.annual : p.monthly}</span>
                <span style={{ fontSize: '12px', color: '#8892a4' }}>/month</span>
                {annual && <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '2px' }}>Billed annually</div>}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {p.features.map(f => <li key={f} style={{ fontSize: '12px', color: '#8892a4', display: 'flex', alignItems: 'flex-start', gap: '6px' }}><span style={{ color: '#3b82f6', flexShrink: 0 }}>✓</span>{f}</li>)}
                {p.unavail.map(f => <li key={f} style={{ fontSize: '12px', color: '#8892a4', display: 'flex', alignItems: 'flex-start', gap: '6px', opacity: '.4' }}><span>—</span>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        {!submitted ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

            {/* Payment Methods */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '15px', marginBottom: '1.25rem', paddingBottom: '.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Payment Method</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.25rem' }}>
                {methods.map(m => (
                  <div key={m.id} onClick={() => setSelectedMethod(m.id)} style={{
                    display: 'flex', alignItems: 'center', gap: '.75rem',
                    background: selectedMethod === m.id ? 'rgba(37,99,235,0.06)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${selectedMethod === m.id ? '#2563eb' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '10px', padding: '.75rem 1rem', cursor: 'pointer', transition: 'all .2s',
                  }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{m.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 500 }}>{m.name}</div>
                      <div style={{ fontSize: '11px', color: '#8892a4' }}>{m.sub}</div>
                    </div>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: `1.5px solid ${selectedMethod === m.id ? '#2563eb' : 'rgba(255,255,255,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {selectedMethod === m.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem', fontSize: '12px', color: '#8892a4', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                <strong style={{ color: '#e8eaf0', display: 'block', marginBottom: '.4rem' }}>How to pay:</strong>
                <div>1. Send ₱{price?.toLocaleString()} to the account above</div>
                <div>2. Screenshot your receipt</div>
                <div>3. Fill in your details and reference number</div>
                <div>4. Submit — we confirm within 24 hours ✓</div>
              </div>

              {error && <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '8px', padding: '10px', fontSize: '12px', color: '#f87171', marginBottom: '1rem' }}>⚠ {error}</div>}

              <div style={{ marginBottom: '.75rem' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>FULL NAME</label>
                <input placeholder="Juan Dela Cruz" value={fullName} onChange={e => setFullName(e.target.value)} style={inp} />
              </div>
              <div style={{ marginBottom: '.75rem' }}>
                <label style={{ fontSize: '11px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>EMAIL ADDRESS</label>
                <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} style={inp} />
              </div>
              <div>
                <label style={{ fontSize: '11px', fontWeight: 500, color: '#8892a4', display: 'block', marginBottom: '.35rem', letterSpacing: '.3px' }}>REFERENCE / TRANSACTION NUMBER</label>
                <input placeholder="e.g. 123456789012" value={ref} onChange={e => setRef(e.target.value)} style={inp} />
                <div style={{ fontSize: '11px', color: '#8892a4', marginTop: '4px' }}>Found in your GCash, Maya, or banking app after payment</div>
              </div>
            </div>

            {/* Order Summary */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '15px', marginBottom: '1.25rem', paddingBottom: '.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Order Summary</div>

              {[
                ['Plan',    `${plan.label} Plan`],
                ['Billing', annual ? 'Annual (-20%)' : 'Monthly'],
                ['Method',  methods.find(m => m.id === selectedMethod)?.name || ''],
                ['Amount',  `₱${price?.toLocaleString()}`],
              ].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#8892a4' }}>{l}</span>
                  <span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.75rem', paddingTop: '.75rem', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '16px' }}>
                <span>Total</span>
                <span>₱{price?.toLocaleString()}</span>
              </div>

              <div style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '8px', padding: '.75rem 1rem', fontSize: '12px', color: '#93c5fd', lineHeight: '1.7', margin: '1.25rem 0' }}>
                <strong style={{ color: '#3b82f6', display: 'block', marginBottom: '.2rem' }}>📧 After submission:</strong>
                Our team manually verifies each payment within 24 hours. Once confirmed, your account will be upgraded automatically.
              </div>

              {!user && (
                <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '8px', padding: '.75rem 1rem', fontSize: '12px', color: '#f59e0b', marginBottom: '1rem' }}>
                  ⚠ <Link href="/login" style={{ color: '#f59e0b', fontWeight: 600 }}>Log in</Link> or <Link href="/register" style={{ color: '#f59e0b', fontWeight: 600 }}>create an account</Link> before submitting payment.
                </div>
              )}

              <button onClick={handleSubmit} disabled={!email || !ref || loading} style={{
                width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '12px',
                borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                cursor: (!email || !ref || loading) ? 'not-allowed' : 'pointer',
                opacity: (!email || !ref) ? .5 : 1, fontFamily: "'DM Sans',sans-serif",
              }}>
                {loading ? 'Submitting...' : `Submit Payment — ₱${price?.toLocaleString()}`}
              </button>
              <div style={{ textAlign: 'center', fontSize: '11px', color: '#8892a4', marginTop: '.75rem' }}>🔒 Your details are kept secure and private</div>
            </div>
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.6rem', marginBottom: '.5rem' }}>Payment Submitted!</h2>
            <p style={{ color: '#8892a4', fontSize: '14px', lineHeight: '1.7', maxWidth: '400px', margin: '0 auto 1.75rem' }}>
              We received your {plan.label} plan payment submission. Our team will verify your reference number and upgrade your account within 24 hours. Check your email for confirmation.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/dashboard" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Go to Dashboard →</Link>
              <Link href="/lessons" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#e8eaf0', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Browse Lessons</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}