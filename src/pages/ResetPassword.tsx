import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password-input';
import { passwordSchema } from '@/lib/admin-validation';
import { Label } from '@/components/ui/label';
export default function ResetPassword() {
  const [recovery, setRecovery] = useState(new URLSearchParams(window.location.hash.slice(1)).get('type') === 'recovery');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => { const { data } = supabase.auth.onAuthStateChange(event => { if (event === 'PASSWORD_RECOVERY') setRecovery(true); }); return () => data.subscription.unsubscribe(); }, []);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!recovery) return;
    if (!passwordSchema.safeParse(password).success || password !== confirmation) { setNotice('Enter a password and make sure both passwords match.'); return; }
    setBusy(true); const { error } = await supabase.auth.updateUser({ password });
    setNotice(error ? error.message : 'Password updated. You can sign in to JAMI Admin.'); setBusy(false);
  };
  return <main className="max-w-md mx-auto px-5 py-16"><h1 className="text-3xl font-bold mb-6">Reset password</h1>{recovery ? <form onSubmit={submit} className="space-y-4"><Label htmlFor="new-password">New password</Label><PasswordInput id="new-password" autoComplete="new-password" value={password} onChange={e=>setPassword(e.target.value)} required /><Label htmlFor="confirm-password">Confirm password</Label><PasswordInput id="confirm-password" autoComplete="new-password" value={confirmation} onChange={e=>setConfirmation(e.target.value)} required /><Button disabled={busy}>Update password</Button></form> : <p>Open the password reset link from your email to continue.</p>}{notice && <p role="status" className="mt-4">{notice}</p>}<Button asChild variant="link" className="mt-4"><Link to="/admin">Back to JAMI Admin</Link></Button></main>;
}