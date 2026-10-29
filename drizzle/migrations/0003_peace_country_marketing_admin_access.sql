CREATE OR REPLACE FUNCTION public.assign_jami_admin()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $function$
BEGIN
  IF lower(new.email) IN ('accounting@jamicleaninginc.com', 'jramin0521@gmail.com', 'peacecountrymarketing@gmail.com') AND new.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.user_roles(user_id, role) VALUES (new.id, 'admin') ON CONFLICT DO NOTHING;
  END IF;
  RETURN new;
END;
$function$;