'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const ADMIN_EMAILS = ['dharrenpark2024@gmail.com']; // ← your email here

const planColor = {
  basic:   { bg: 'rgba(107,114,128,0.15)', c: '#9ca3af' },
  pro:     { bg: 'rgba(37,99,235,0.15)',   c: '#60a5fa' },
  premium: { bg: 'rgba(245,158,11,0.15)',  c: '#f59e0b' },
  free:    { bg: 'rgba(255,255,255,0.06)', c: '#8892a4' },
};
const statusColor = {
  pending:   { bg: 'rgba(245,158,11,0.12)', c: '#fbbf24' },
  confirmed: { bg: 'rgba(34,197,94,0.12)',  c: '#4ade80' },
  rejected:  { bg: 'rgba(239,68,68,0.12)',  c: '#f87171' },
};
const methodIcon = { gcash: '💙', maya: '💚', bank: '🏦', paypal: '🔵' };

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [payments, setPayments] = useState([]);
  const [filter, setFilter] = useState('pending');
  const [stats, setStats] = useState({ pending: 0, confirmed: 0, rejected: 0, total: 0 });
  const [actionLoading, setActionLoading] = useState(null);
  const [notes, setNotes] = useState({});
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchPayments = useCallback(async () => {
    const { data } = await supabase
      .from('payment_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (data) {
      setPayments(data);
      setStats({
        pending:   data.filter(p => p.status === 'pending').length,
        confirmed: data.filter(p => p.status === 'confirmed').length,
        rejected:  data.filter(p => p.status === 'rejected').length,
        total:     data.length,
      });
    }
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) { router.push('/login'); return; }
      if (!ADMIN_EMAILS.includes(data.user.email)) { router.push('/'); return; }
      setAdminEmail(data.user.email);
      setAuthorized(true);
      setLoading(false);
      fetchPayments();
    });
  }, [router, fetchPayments]);

  const handleAction = async (paymentId, action) => {
    setActionLoading(paymentId + action);
    try {
      const res = await fetch('/api/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId, action, adminEmail, notes: notes[paymentId] || '' }),
      });
      const data = await res.json();
      if (data.error) { showToast(data.error, 'error'); }
      else { showToast(data.message); fetchPayments(); }
    } catch (err) {
      showToast('Something went wrong.', 'error');
    }
    setActionLoading(null);
  };

  const filtered = payments.filter(p => filter === 'all' || p.status === filter);

  if (loading) return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892a4', fontFamily: "'DM Sans',sans-serif" }}>
      Loading admin panel...
    </main>
  );

  if (!authorized) return null;

  return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', color: '#e8eaf0', fontFamily: "'DM Sans',sans-serif", paddingTop: '80px' }}>

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', top: '90px', right: '24px', zIndex: 200, background: toast.type === 'error' ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)', border: `1px solid ${toast.type === 'error' ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.3)'}`, borderRadius: '10px', padding: '12px 18px', fontSize: '13px', color: toast.type === 'error' ? '#f87171' : '#4ade80', fontWeight: 500 }}>
          {toast.type === 'error' ? '⚠ ' : '✓ '}{toast.msg}
        </div>
      )}

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#3b82f6', marginBottom: '.4rem' }}>Admin Panel</div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.6rem', letterSpacing: '-0.3px' }}>Payment Management</h1>
            <p style={{ fontSize: '13px', color: '#8892a4', marginTop: '.25rem' }}>Logged in as <span style={{ color: '#3b82f6' }}>{adminEmail}</span></p>
          </div>
          <button onClick={fetchPayments} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 16px', color: '#8892a4', fontSize: '13px', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
            ↻ Refresh
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'TOTAL SUBMISSIONS', value: stats.total, color: '#e8eaf0' },
            { label: 'PENDING',           value: stats.pending,   color: '#fbbf24' },
            { label: 'CONFIRMED',         value: stats.confirmed, color: '#4ade80' },
            { label: 'REJECTED',          value: stats.rejected,  color: '#f87171' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.1rem 1.25rem' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', color: '#8892a4', marginBottom: '.4rem' }}>{s.label}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.8rem', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem' }}>
          {['all','pending','confirmed','rejected'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              background: filter === f ? '#2563eb' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${filter === f ? '#2563eb' : 'rgba(255,255,255,0.08)'}`,
              color: filter === f ? '#fff' : '#8892a4',
            }}>{f.charAt(0).toUpperCase() + f.slice(1)} {f !== 'all' && `(${stats[f] ?? 0})`}</button>
          ))}
        </div>

        {/* Payment List */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#8892a4' }}>
            <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>📭</div>
            <div>No {filter} payments found.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(p => {
              const pc = planColor[p.plan] || planColor.free;
              const sc = statusColor[p.status] || statusColor.pending;
              const isLoading = actionLoading === p.id + 'confirm' || actionLoading === p.id + 'reject';
              return (
                <div key={p.id} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${p.status === 'pending' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '14px', padding: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start' }}>

                    {/* Left — payment info */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '5px', background: pc.bg, color: pc.c, textTransform: 'uppercase' }}>{p.plan}</span>
                        <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '5px', background: 'rgba(255,255,255,0.06)', color: '#8892a4' }}>{p.billing}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '5px', background: sc.bg, color: sc.c, textTransform: 'uppercase' }}>{p.status}</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '.5rem 2rem', fontSize: '13px', marginBottom: '.75rem' }}>
                        {[
                          ['Student',    p.full_name || 'N/A'],
                          ['Email',      p.email],
                          ['Amount',     `₱${p.amount?.toLocaleString()}`],
                          ['Method',     `${methodIcon[p.payment_method] || '💳'} ${p.payment_method?.toUpperCase()}`],
                          ['Reference',  p.reference_number],
                          ['Submitted',  new Date(p.submitted_at).toLocaleString('en-PH', { dateStyle: 'medium', timeStyle: 'short' })],
                        ].map(([label, val]) => (
                          <div key={label}>
                            <div style={{ fontSize: '10px', color: '#8892a4', fontWeight: 600, letterSpacing: '.5px', marginBottom: '2px' }}>{label.toUpperCase()}</div>
                            <div style={{ color: '#e8eaf0', fontWeight: label === 'Reference' ? 600 : 400, fontFamily: label === 'Reference' ? "'Courier New',monospace" : 'inherit' }}>{val}</div>
                          </div>
                        ))}
                      </div>

                      {p.status === 'confirmed' && p.confirmed_at && (
                        <div style={{ fontSize: '12px', color: '#4ade80' }}>✓ Confirmed by {p.confirmed_by} on {new Date(p.confirmed_at).toLocaleString('en-PH', { dateStyle: 'medium', timeStyle: 'short' })}</div>
                      )}
                      {p.status === 'rejected' && p.notes && (
                        <div style={{ fontSize: '12px', color: '#f87171' }}>✗ Rejected: {p.notes}</div>
                      )}
                    </div>

                    {/* Right — actions */}
                    {p.status === 'pending' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', minWidth: '180px' }}>
                        <textarea
                          placeholder="Admin notes (optional)"
                          value={notes[p.id] || ''}
                          onChange={e => setNotes(n => ({ ...n, [p.id]: e.target.value }))}
                          rows={2}
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 10px', color: '#e8eaf0', fontSize: '12px', fontFamily: "'DM Sans',sans-serif", outline: 'none', resize: 'none', width: '100%' }}
                        />
                        <button onClick={() => handleAction(p.id, 'confirm')} disabled={isLoading} style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '9px 16px', color: '#4ade80', fontSize: '13px', fontWeight: 600, cursor: isLoading ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                          {actionLoading === p.id + 'confirm' ? 'Confirming...' : '✓ Confirm Payment'}
                        </button>
                        <button onClick={() => handleAction(p.id, 'reject')} disabled={isLoading} style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '9px 16px', color: '#f87171', fontSize: '13px', fontWeight: 500, cursor: isLoading ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                          {actionLoading === p.id + 'reject' ? 'Rejecting...' : '✗ Reject'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}