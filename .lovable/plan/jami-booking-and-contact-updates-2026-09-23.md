# JAMI booking and contact updates

## Scope
- Add a reusable Housecall Pro booking button that preserves token `28a856a9a34b440c91b86efac15bf4f2` and organization `Jami-Cleaning-Inc` exactly.
- Load the Housecall Pro script once, expose a safe click handler, and show a useful loading/unavailable state if the vendor script is delayed or fails.
- Add a branded **Book Online** action in the homepage contact area and connect the existing **Book a home clean** and blog **Book a Service** actions to the same modal. Quote-request links remain quote links.
- Add **Alternate phone: 780-897-7444** with `tel:+1780897744` in the homepage announcement/contact/footer areas and the FAQ and Blog announcement/footer areas. Keep `780-897-3077` as primary.
- Replace every public unlimited late-fee claim with: **“Late fees are waived for the first month of missed payment only.”** Update both website content and the public business-information tools so all surfaced policy text agrees.

## Technical details
- Create one small booking integration component that injects the external script only when absent, handles ready/error state, and calls `HCPWidget.openModal()` from styled design-system buttons.
- Add the vendor window type safely in TypeScript and avoid duplicate script tags across page navigation.
- Keep current visual tokens, typography, imagery, section order, and unrelated copy unchanged.

## Verification
- Search the full project to confirm no unrestricted “no late fees” wording remains.
- Confirm every alternate number is displayed as `780-897-7444` and linked to `tel:+1780897744`.
- Test the booking modal from homepage and Blog entry points in desktop and mobile viewports.
- Check homepage, FAQ, and Blog contact/footer layouts at desktop and mobile sizes, and report any vendor-side modal limitation if encountered.
