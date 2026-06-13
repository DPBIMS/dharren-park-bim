import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const { paymentId, userId, plan } = await req.json();

  await supabase
    .from('payment_submissions')
    .update({ status: 'confirmed' })
    .eq('id', paymentId);

  await supabase
    .from('profiles')
    .update({ plan })
    .eq('id', userId);

  return NextResponse.json({ success: true });
}