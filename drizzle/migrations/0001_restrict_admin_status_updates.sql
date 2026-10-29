revoke update on public.contact_submissions from authenticated;
grant update(status) on public.contact_submissions to authenticated;
revoke update on public.maintenance_requests from authenticated;
grant update(status) on public.maintenance_requests to authenticated;