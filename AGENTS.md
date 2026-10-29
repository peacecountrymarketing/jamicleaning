# Architecture rules
- Admin access is enforced by protected user_roles and confirmed account email, never browser storage; client guards are only presentation.
- Contact submissions enter through a validated Cloud function; only admins can read or update them.
- Website analytics record anonymous session IDs and allowlisted public paths; admin-only aggregation uses database permissions.
- Maintenance requests are persisted before any email handoff, with honest delivery status until verified sender infrastructure exists.