import { ArrowRight, BarChart3, Inbox, Mail, Users, Wrench, Clock3, CheckCircle2 } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { Tables } from '@/integrations/supabase/types';

export type AdminAnalytics = { views: number; visitors: number; pages: { path: string; views: number }[]; daily: { day: string; views: number }[] };

type Props = {
  analytics: AdminAnalytics | null;
  submissions: Tables<'contact_submissions'>[];
  requests: Tables<'maintenance_requests'>[];
  loading: boolean;
  days: string;
  onNavigate: (tab: string, newOnly?: boolean) => void;
};

const shortDate = (value: string) => new Date(value).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' });
const pageName = (path: string) => ({ '/': 'Home', '/book': 'Online booking', '/faq': 'FAQ', '/blog': 'Blog' }[path] ?? path);

export function ActivityChart({ analytics }: { analytics: AdminAnalytics | null }) {
  return analytics?.daily.length ? <>
    <ChartContainer config={{ views: { label: 'Page views', color: 'hsl(var(--secondary))' } }} className="h-64 w-full aspect-auto">
      <AreaChart accessibilityLayer data={analytics.daily} margin={{ top: 12, right: 12, left: -24, bottom: 0 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickFormatter={shortDate} tickLine={false} axisLine={false} minTickGap={35} />
        <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent labelFormatter={value => shortDate(String(value))} />} />
        <Area type="monotone" dataKey="views" stroke="var(--color-views)" fill="var(--color-views)" fillOpacity={0.12} strokeWidth={2} isAnimationActive={false} />
      </AreaChart>
    </ChartContainer>
    <details className="mt-3 text-sm text-muted-foreground"><summary className="cursor-pointer">View daily totals</summary><div className="max-h-48 overflow-auto mt-3"><table className="w-full text-left"><thead><tr><th className="py-2 font-medium">Date</th><th className="text-right font-medium">Page views</th></tr></thead><tbody>{analytics.daily.map(day => <tr key={day.day} className="border-t"><td className="py-2">{shortDate(day.day)}</td><td className="text-right tabular-nums">{day.views}</td></tr>)}</tbody></table></div></details>
  </> : <div className="h-64 flex flex-col items-center justify-center gap-3 text-muted-foreground"><BarChart3 className="h-8 w-8" /><p>No visits recorded for this period.</p></div>;
}

export default function AdminOverview({ analytics, submissions, requests, loading, days, onNavigate }: Props) {
  const newInquiries = submissions.filter(item => item.status === 'new').length;
  const openRequests = requests.filter(item => item.status !== 'completed').length;
  const metrics = [
    { label: 'Page views', value: analytics?.views, detail: `Last ${days} days`, icon: BarChart3, tab: 'analytics', color: 'bg-secondary/10 text-secondary' },
    { label: 'Visitor sessions', value: analytics?.visitors, detail: `Last ${days} days`, icon: Users, tab: 'analytics', color: 'bg-accent/15 text-accent-foreground' },
    { label: 'New inquiries', value: newInquiries, detail: 'Awaiting review · latest 500', icon: Mail, tab: 'submissions', color: 'bg-secondary/10 text-secondary' },
    { label: 'Open maintenance', value: openRequests, detail: 'Not completed · latest 500', icon: Wrench, tab: 'maintenance', color: 'bg-primary/10 text-primary' },
  ];

  return <div className="space-y-8">
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">{metrics.map(metric => <article key={metric.label} className="bg-card rounded-md border p-4 sm:p-5 shadow-card-bold min-w-0">
      <div className="flex justify-between items-center gap-2"><span className={`p-2 rounded-md ${metric.color}`}><metric.icon className="h-5 w-5" /></span><Button variant="ghost" size="icon" aria-label={`View ${metric.label.toLowerCase()}`} onClick={() => onNavigate(metric.tab, metric.label === 'New inquiries')}><ArrowRight /></Button></div>
      <p className="text-sm font-medium text-muted-foreground mt-4">{metric.label}</p><p className="text-3xl sm:text-4xl font-bold tabular-nums mt-1">{loading ? '—' : metric.value?.toLocaleString() ?? '—'}</p><p className="text-xs text-muted-foreground mt-2">{metric.detail}</p>
    </article>)}</div>

    <div className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] gap-8 lg:gap-10 border-y py-7">
      <section className="min-w-0"><div className="flex justify-between items-start gap-3 mb-5"><div><h2 className="text-xl font-bold">Website activity</h2><p className="text-sm text-muted-foreground mt-1">Page views · last {days} days</p></div><Button variant="ghost" size="sm" onClick={() => onNavigate('analytics')} aria-label="View full analytics"><ArrowRight /></Button></div>{loading ? <div className="h-64 animate-pulse motion-reduce:animate-none bg-muted" role="status" aria-label="Loading website activity" /> : <ActivityChart analytics={analytics} />}</section>
      <section className="min-w-0 lg:border-l lg:pl-8"><h2 className="text-xl font-bold mb-1">Most visited pages</h2><p className="text-sm text-muted-foreground mb-5">Last {days} days</p>{analytics?.pages.length ? <ol className="space-y-5">{analytics.pages.slice(0, 5).map((page, index) => <li key={page.path} className="flex gap-3 items-center"><span className="text-xs text-muted-foreground tabular-nums w-4">{index + 1}</span><div className="flex-1 min-w-0"><p className="font-medium break-words">{pageName(page.path)}</p><p className="text-xs text-muted-foreground break-all">{page.path}</p></div><span className="text-sm tabular-nums font-semibold">{page.views.toLocaleString()}</span></li>)}</ol> : <p className="text-sm text-muted-foreground">{loading ? 'Loading pages…' : 'No visits recorded yet.'}</p>}</section>
    </div>

    <div className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] gap-8 lg:gap-10">
      <section className="min-w-0"><div className="flex justify-between items-center gap-3 mb-4"><h2 className="text-xl font-bold">Recent inquiries</h2><Button variant="link" onClick={() => onNavigate('submissions')}>View all <ArrowRight /></Button></div>{loading ? <p role="status" className="text-sm text-muted-foreground py-8">Loading inquiries…</p> : submissions.length ? <div className="divide-y">{submissions.slice(0, 4).map(item => <div key={item.id} className="py-4 flex gap-3 items-start"><span className="bg-secondary/10 text-secondary p-2 rounded-md shrink-0"><Mail className="h-4 w-4" /></span><div className="flex-1 min-w-0"><p className="font-semibold break-words">{item.name}</p><p className="text-sm text-muted-foreground truncate">{item.service || 'General inquiry'}</p><p className="text-xs text-muted-foreground mt-1">{shortDate(item.created_at)}</p></div><span className={`text-xs px-2 py-1 rounded capitalize shrink-0 ${item.status === 'new' ? 'bg-secondary/10 text-secondary' : 'bg-muted text-muted-foreground'}`}>{item.status}</span></div>)}</div> : <div className="py-8 flex items-center gap-3 text-muted-foreground"><Inbox className="h-6 w-6" /><p className="text-sm">No inquiries yet.</p></div>}</section>
      <section className="min-w-0 lg:border-l lg:pl-8"><h2 className="text-xl font-bold mb-5">Workspace</h2><div className="space-y-2"><Button variant="outline" className="w-full justify-between h-12" onClick={() => onNavigate('submissions', true)}><span className="flex gap-3 items-center"><Inbox />Review new inquiries</span><ArrowRight /></Button><Button variant="outline" className="w-full justify-between h-12" onClick={() => onNavigate('maintenance')}><span className="flex gap-3 items-center"><Wrench />Request a website update</span><ArrowRight /></Button></div><div className="mt-6 flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /><p className="text-sm">{requests.filter(item => item.status === 'completed').length} completed maintenance requests</p></div><div className="mt-3 flex items-start gap-3 text-muted-foreground"><Clock3 className="h-4 w-4 mt-0.5 shrink-0" /><p className="text-xs">Maintenance email delivery is manual.</p></div></section>
    </div>
  </div>;
}