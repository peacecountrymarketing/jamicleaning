# Architecture rules
- Admin access is enforced by protected user_roles and confirmed account email, never browser storage; client guards are only presentation.
- External website Google sign-in hands off to the published admin page before starting managed OAuth; the external host has no managed OAuth endpoints.
- Contact submissions enter through a validated Cloud function; only admins can read or update them.
- Website analytics record anonymous session IDs and allowlisted public paths; admin-only aggregation uses database permissions.
- Maintenance requests are persisted before any email handoff, with honest delivery status until verified sender infrastructure exists.