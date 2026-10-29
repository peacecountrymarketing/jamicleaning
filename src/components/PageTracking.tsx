import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

export default function PageTracking() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!['/', '/faq', '/blog', '/book'].includes(pathname)) return;
    try {
      let visitor = sessionStorage.getItem('jami-visitor');
      if (!visitor) { visitor = crypto.randomUUID(); sessionStorage.setItem('jami-visitor', visitor); }
      if (navigator.doNotTrack === '1') return;
      void supabase.rpc('record_page_view', { _visitor_id: visitor, _path: pathname });
    } catch { /* Browsing remains available when storage is blocked. */ }
  }, [pathname]);
  return null;
}