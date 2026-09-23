import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  business_name: "JAMI Cleaning Inc",
  location: "Grande Prairie, Alberta",
  owners: ["Ramin Jami", "Leila Jami"],
  phones: [
    { label: "Primary", display: "780-897-3077", link: "tel:+17808973077" },
    { label: "Alternate phone", display: "780-897-7444", link: "tel:+1780897744" },
  ],
  email: "Accounting@jamicleaninginc.com",
  social: { instagram: "@jamicleaninginc" },
  hours: "Monday-Friday, 8:00 AM to 10:00 PM",
  service_area: "Grande Prairie, Wembley, Clairmont, and the County of Grande Prairie, Alberta",
  canadian_owned: true,
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return phone numbers, email, hours, location, and social handle for JAMI Cleaning Inc.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
