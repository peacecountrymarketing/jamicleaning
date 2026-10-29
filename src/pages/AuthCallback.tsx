import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
export default function AuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => { if (session) navigate('/admin', { replace: true }); });
    void supabase.auth.getUser().then(() => navigate('/admin', { replace: true }));
    return () => data.subscription.unsubscribe();
  }, [navigate]);
  return <p className="p-10 text-center">Completing sign-in…</p>;
}