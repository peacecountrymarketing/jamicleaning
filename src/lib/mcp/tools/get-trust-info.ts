import { defineTool } from "@lovable.dev/mcp-js";

const TRUST = {
  credentials: [
    "Licensed, bonded, and insured",
    "10+ years in the cleaning industry",
    "Locally owned and operated in Grande Prairie",
  ],
  guarantees: [
    "Re-cleaning guarantee within 24 hours if you are not satisfied",
    "Competitive rates with price matching",
    "Ask about our zero cancellation fee policy",
  ],
  certifications: [
    "WHMIS",
    "Personal Protective Equipment",
    "Bloodborne Pathogens",
    "Ladder Safety",
    "Pandemic Awareness",
  ],
  rating: { source: "Google", stars: 4.6, review_count: 9 },
};

export default defineTool({
  name: "get_trust_info",
  title: "Get trust and guarantee info",
  description: "Return credentials, guarantees, certifications, and public review rating for JAMI Cleaning Inc.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TRUST, null, 2) }],
    structuredContent: TRUST,
  }),
});
