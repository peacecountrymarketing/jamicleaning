# Architecture rules
- Password fields use a shared visibility control; Cloud Auth owns password strength validation to avoid conflicting client requirements.
- Admin access is enforced by protected user_roles and confirmed account email, never browser storage; client guards are only presentation.
- Admin authentication uses Cloud email/password on the current origin without cross-host handoffs, preserving external hosting and same-domain sessions.
- Contact submissions enter through a validated Cloud function; only admins can read or update them.
- Website analytics record anonymous session IDs and allowlisted public paths; admin-only aggregation uses database permissions.
- Maintenance requests are persisted before any email handoff, with honest delivery status until verified sender infrastructure exists.