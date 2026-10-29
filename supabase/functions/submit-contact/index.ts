import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(3).max(255).refine(v => z.string().email().safeParse(v).success || /^\+?[\d\s().-]{7,25}$/.test(v)),
  service: z.enum(['', 'residential', 'commercial', 'vehicle', 'rv', 'aviation', 'yard', 'pressure', 'carpet-spot', 'hat', 'shoe', 'snow', 'other']),
  timing: z.enum(['', 'asap', 'week', 'month', 'recurring']),
  message: z.string().trim().max(3000),
  website: z.string().max(0).optional(),
});
const respond = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return respond({ error: 'Please check your contact details and message.' }, 400);
    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond({ error: 'Request service unavailable.' }, 503);
    const { website: _website, ...submission } = parsed.data;
    const { error } = await createClient(url, key).from('contact_submissions').insert(submission);
    if (error) return respond({ error: 'Unable to save your request. Please try again.' }, 500);
    return respond({ success: true });
  } catch { return respond({ error: 'Invalid request.' }, 400); }
});