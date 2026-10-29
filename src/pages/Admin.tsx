import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import { Mail, BarChart3, Wrench, LogOut, RefreshCw, ArrowLeft, Send, ShieldCheck } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import '@lovable.dev/cloud-auth-js/styles.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { ADMIN_EMAIL, MAINTENANCE_RECIPIENT, maintenanceSchema } from '@/lib/admin-validation';
import type { Tables } from '@/integrations/supabase/types';

type Analytics = { views: number; visitors: number; pages: { path: string; views: number }[]; daily: { day: string; views: number }[] };
const date = (value: string) => new Date(value).toLocaleString('en-CA', { dateStyle: 'medium', timeStyle: 'short' });

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');
  const [submissions, setSubmissions] = useState<Tables<'contact_submissions'>[]>([]);
  const [requests, setRequests] = useState<Tables<'maintenance_requests'>[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [days, setDays] = useState('30');
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('normal');

  useEffect(() => {
    let active = true;
    const validate = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!active) return;
      setUser(error ? null : data.user);
      if (data.user && !error) {
        const role = await supabase.rpc('has_role', { _user_id: data.user.id, _role: 'admin' });
        if (!active) return;
        setAllowed(role.data === true && !role.error);
      } else setAllowed(false);
      setChecking(false);
    };
    const { data: listener } = supabase.auth.onAuthStateChange(() => { setTimeout(() => { void validate(); }, 0); });
    void validate();
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);

  const load = async () => {
    setLoading(true); setLoadError('');
    const [contacts, maintenance, stats] = await Promise.all([
      supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }).limit(500),
      supabase.from('maintenance_requests').select('*').order('created_at', { ascending: false }).limit(500),
      supabase.rpc('admin_analytics', { _days: Number(days) }),
    ]);
    if (contacts.error || maintenance.error || stats.error) setLoadError('Unable to load all admin information. Please refresh.');
    setSubmissions(contacts.data ?? []); setRequests(maintenance.data ?? []);
    setAnalytics(stats.error ? null : stats.data as unknown as Analytics);
    setLoading(false);
  };
  useEffect(() => { if (allowed) void load(); }, [allowed, days]);

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setNotice('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setNotice(error.message);
    setBusy(false);
  };
  const activate = async () => {
    if (email.trim().toLowerCase() !== ADMIN_EMAIL) { setNotice('Use the approved JAMI email address.'); return; }
    if (password.length < 8) { setNotice('Use a password with at least 8 characters.'); return; }
    setBusy(true);
    const { error } = await supabase.auth.signUp({ email: ADMIN_EMAIL, password, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } });
    setNotice(error ? error.message : 'Check the JAMI email inbox to confirm your account, then sign in.');
    setBusy(false);
  };
  const forgot = async () => {
    if (!email) { setNotice('Enter your email address first.'); return; }
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
    setNotice(error ? error.message : 'If an account exists, a password reset link has been sent.'); setBusy(false);
  };
  const oauth = async (provider: 'google' | 'lovable') => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: `${window.location.origin}/auth/callback` });
    if (result.error) setNotice(result.error.message);
    setBusy(false);
  };
  const updateStatus = async (id: string, status: string, table: 'contact_submissions' | 'maintenance_requests') => {
    const { error } = await supabase.from(table).update({ status }).eq('id', id);
    if (error) toast.error('Could not update status.'); else { toast.success('Status updated'); void load(); }
  };
  const submitMaintenance = async (event: React.FormEvent) => {
    event.preventDefault(); if (!user) return;
    const parsed = maintenanceSchema.safeParse({ subject, description, priority });
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? 'Check your request.'); return; }
    setBusy(true);
    const { error } = await supabase.from('maintenance_requests').insert({ ...parsed.data, user_id: user.id });
    if (error) toast.error('Unable to save request. Please try again.');
    else { toast.success('Maintenance request saved', { description: 'Use Email request below to send it to Peace Country Marketing.' }); setSubject(''); setDescription(''); void load(); }
    setBusy(false);
  };

  return <div className="min-h-screen bg-muted">
    <header className="bg-background border-b"><div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
      <Link to="/" className="shrink-0"><img src="/assets/logos/jami-logo-new.png" alt="JAMI Cleaning Inc." className="h-12 w-auto" /></Link>
      <div className="flex items-center gap-3"><Button asChild variant="ghost" size="sm"><Link to="/"><ArrowLeft />Website</Link></Button>{user && <Button variant="outline" size="sm" onClick={async () => { const { error } = await supabase.auth.signOut(); if (error) toast.error('Sign out failed.'); }}><LogOut />Sign out</Button>}</div>
    </div></header>
    {checking ? <p className="p-12 text-center" role="status">Checking your account…</p> : !user ?
      <main className="max-w-md mx-auto px-5 py-12"><ShieldCheck className="h-10 w-10 text-secondary mb-4" /><h1 className="text-3xl font-bold mb-2">JAMI Admin</h1><p className="text-muted-foreground mb-8">Sign in to your JAMI account.</p>
        <form onSubmit={signIn} className="space-y-5"><div className="space-y-2"><Label htmlFor="admin-email">Email</Label><Input id="admin-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="username" /></div><div className="space-y-2"><Label htmlFor="admin-password">Password</Label><Input id="admin-password" type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={8} required autoComplete="current-password" /></div>
          <Button className="w-full" disabled={busy}>Sign in</Button>
        </form><div className="flex justify-between gap-2 mt-2"><Button variant="link" disabled={busy} onClick={forgot}>Forgot password?</Button><Button variant="link" disabled={busy} onClick={activate}>Activate JAMI account</Button></div>
        <div className="border-t mt-5 pt-5 space-y-3"><Button variant="outline" className="w-full" disabled={busy} onClick={() => oauth('google')}>Sign in with Google</Button><Button type="button" className="lovable-auth-button w-full" disabled={busy} onClick={() => oauth('lovable')}>Sign in with Lovable</Button></div>
        {notice && <p role="status" className="mt-5 text-sm text-foreground break-words">{notice}</p>}
      </main> : !allowed ? <main className="max-w-xl mx-auto px-5 py-16"><h1 className="text-3xl font-bold">Admin access required</h1><p className="mt-4 text-muted-foreground">This account does not have JAMI admin access. Sign in using the approved JAMI account.</p></main> :
      <main className="max-w-7xl mx-auto px-5 py-8"><div className="flex justify-between items-center gap-4 mb-7"><div><p className="text-sm font-semibold text-secondary">JAMI CLEANING INC.</p><h1 className="text-3xl font-bold">Admin overview</h1><p className="text-muted-foreground text-sm mt-2 break-all">{user.email}</p></div><Button variant="outline" size="icon" title="Refresh admin information" aria-label="Refresh admin information" disabled={loading} onClick={load}><RefreshCw className={loading ? 'animate-spin' : ''} /></Button></div>
        {loadError && <p role="alert" className="mb-5 text-destructive">{loadError}</p>}
        <Tabs defaultValue="submissions"><TabsList className="flex w-full sm:w-fit h-auto flex-wrap mb-8"><TabsTrigger value="submissions"><Mail className="h-4 w-4 mr-2" />Submissions</TabsTrigger><TabsTrigger value="analytics"><BarChart3 className="h-4 w-4 mr-2" />Analytics</TabsTrigger><TabsTrigger value="maintenance"><Wrench className="h-4 w-4 mr-2" />Maintenance</TabsTrigger></TabsList>
          <TabsContent value="submissions"><div className="flex flex-col sm:flex-row gap-3 mb-6"><Input aria-label="Search submissions" placeholder="Search name, contact or message" value={search} onChange={e=>setSearch(e.target.value)} className="sm:max-w-sm" /><Select value={filter} onValueChange={setFilter}><SelectTrigger className="sm:w-44" aria-label="Filter submissions"><SelectValue /></SelectTrigger><SelectContent>{['all','new','reviewed','completed'].map(s=><SelectItem key={s} value={s}>{s === 'all' ? 'All statuses' : s}</SelectItem>)}</SelectContent></Select></div>
            {loading && <p role="status">Loading submissions…</p>}
            {!loading && !submissions.filter(s=>(filter==='all'||s.status===filter)&&`${s.name} ${s.contact} ${s.message}`.toLowerCase().includes(search.toLowerCase())).length && <p className="py-12 text-muted-foreground">No submissions found. New website requests will appear here.</p>}
            <div className="space-y-4">{submissions.filter(s=>(filter==='all'||s.status===filter)&&`${s.name} ${s.contact} ${s.message}`.toLowerCase().includes(search.toLowerCase())).map(s=><article key={s.id} className="bg-card border rounded-md p-5"><div className="flex flex-col sm:flex-row justify-between gap-3"><div><h2 className="font-bold text-lg">{s.name}</h2><p className="text-sm text-muted-foreground">{date(s.created_at)}</p></div><Select value={s.status} onValueChange={v=>updateStatus(s.id,v,'contact_submissions')}><SelectTrigger className="w-40" aria-label={`Status for ${s.name}`}><SelectValue /></SelectTrigger><SelectContent>{['new','reviewed','completed'].map(v=><SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent></Select></div><p className="mt-3 break-all">{s.contact}</p><p className="text-sm text-secondary mt-2">{s.service || 'Service not specified'} · {s.timing || 'Timing not specified'}</p><p className="mt-3 whitespace-pre-wrap break-words">{s.message || 'No additional message.'}</p></article>)}</div>
          </TabsContent>
          <TabsContent value="analytics"><div className="flex flex-wrap justify-between items-center gap-4 mb-6"><h2 className="text-2xl font-bold">Website activity</h2><Select value={days} onValueChange={setDays}><SelectTrigger className="w-44" aria-label="Analytics date range"><SelectValue /></SelectTrigger><SelectContent>{['7','30','90'].map(d=><SelectItem key={d} value={d}>Last {d} days</SelectItem>)}</SelectContent></Select></div><p className="text-sm text-muted-foreground mb-6">Recorded since admin setup. Visitors are anonymous browsing sessions; Do Not Track visits are excluded.</p>
            <div className="grid sm:grid-cols-3 gap-6 border-y py-6 mb-8">{[['Page views', analytics?.views],['Visitor sessions',analytics?.visitors],['New inquiries',submissions.filter(s=>s.status==='new').length]].map(([label,value])=><div key={label}><p className="text-sm text-muted-foreground">{label}</p><p className="text-4xl font-bold mt-2">{value ?? '—'}</p></div>)}</div>
            <h3 className="font-bold text-lg mb-4">Top pages</h3>{analytics?.pages.length ? analytics.pages.map(p=><div key={p.path} className="flex justify-between py-3 border-b"><span>{p.path}</span><span className="font-semibold">{p.views} views</span></div>) : <p className="text-muted-foreground">No visits recorded for this period.</p>}
            <h3 className="font-bold text-lg mt-8 mb-4">Daily page views</h3><div className="max-h-80 overflow-auto">{analytics?.daily.map(d=><div key={d.day} className="flex justify-between py-3 border-b"><span>{d.day}</span><span>{d.views}</span></div>)}</div>
          </TabsContent>
          <TabsContent value="maintenance"><div className="grid lg:grid-cols-2 gap-10"><section><h2 className="text-2xl font-bold mb-2">New maintenance request</h2><p className="text-sm text-muted-foreground mb-6 break-all">To: {MAINTENANCE_RECIPIENT}</p><form onSubmit={submitMaintenance} className="space-y-5"><div className="space-y-2"><Label htmlFor="maintenance-subject">Subject</Label><Input id="maintenance-subject" value={subject} onChange={e=>setSubject(e.target.value)} maxLength={150} required /></div><div className="space-y-2"><Label htmlFor="maintenance-description">Request details</Label><Textarea id="maintenance-description" value={description} onChange={e=>setDescription(e.target.value)} maxLength={5000} rows={6} required /></div><div className="space-y-2"><Label>Priority</Label><Select value={priority} onValueChange={setPriority}><SelectTrigger aria-label="Priority"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="normal">Normal</SelectItem><SelectItem value="urgent">Urgent</SelectItem></SelectContent></Select></div><Button disabled={busy} type="submit"><Wrench />{busy ? 'Saving…' : 'Save request'}</Button></form></section>
            <section><h2 className="text-2xl font-bold mb-5">Request history</h2><p className="text-sm text-muted-foreground mb-5">Automatic email delivery is not enabled. Email request opens your email app; saving alone does not send email.</p>{!requests.length && <p className="text-muted-foreground">No maintenance requests yet.</p>}<div className="space-y-4">{requests.map(r=><article key={r.id} className="bg-card border rounded-md p-5"><h3 className="font-bold break-words">{r.subject}</h3><p className="text-xs text-muted-foreground mt-1">{date(r.created_at)} · {r.priority} · {r.email_status === 'sent' ? 'Email sent' : 'Email not sent automatically'}</p><p className="whitespace-pre-wrap break-words mt-3">{r.description}</p><div className="flex flex-wrap gap-3 mt-4"><Select value={r.status} onValueChange={v=>updateStatus(r.id,v,'maintenance_requests')}><SelectTrigger className="w-40" aria-label={`Status for ${r.subject}`}><SelectValue /></SelectTrigger><SelectContent>{['submitted','in_progress','completed'].map(v=><SelectItem key={v} value={v}>{v.replace('_',' ')}</SelectItem>)}</SelectContent></Select><Button asChild variant="outline"><a href={`mailto:${MAINTENANCE_RECIPIENT}?subject=${encodeURIComponent(`JAMI website: ${r.subject}`)}&body=${encodeURIComponent(`${r.description}\n\nPriority: ${r.priority}\nRequest ID: ${r.id}`)}`}><Send />Email request</a></Button></div></article>)}</div></section></div></TabsContent>
        </Tabs>
      </main>}
  </div>;
}