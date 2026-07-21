import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  business_name: "JAMI Cleaning Inc",
  location: "Grande Prairie, Alberta",
  owners: ["Ramin Jami", "Leila Jami"],
  phones: ["780-897-3077", "780-897-7444"],
  email: "Accounting@jamicleaninginc.com",
  social: { instagram: "@jamicleaninginc" },
  hours: "Monday-Friday, 8:00 AM to 8:00 PM",
  service_area: "Grande Prairie, Alberta and surrounding area",
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
