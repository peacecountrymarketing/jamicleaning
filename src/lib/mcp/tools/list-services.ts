import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SERVICES = [
  {
    id: "residential",
    name: "Residential Cleaning",
    summary: "Detailed home cleans, kitchens, bathrooms, floors, recurring or one-time support.",
  },
  {
    id: "commercial",
    name: "Commercial Cleaning",
    summary: "Offices and businesses. Dependable scheduling, sanitation-focused work, professional presentation.",
  },
  {
    id: "vehicle",
    name: "Vehicle Detailing",
    summary: "Interior and exterior detailing, mats, windows, vacuuming, deodorizing, clear coat protectant. Larger vehicles may cost more.",
  },
  {
    id: "yard",
    name: "Yard & Seasonal Maintenance",
    summary: "Mowing, edging, trimming, lawn aeration, dethatching, weed removal, snow removal, and garbage cleanup.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services JAMI Cleaning Inc offers in Grande Prairie, Alberta.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});

export { SERVICES };

// Extra service details keyed by id, used by get_service_details.
export const SERVICE_DETAILS: Record<string, { includes: string[]; notes?: string }> = {
  residential: {
    includes: [
      "Kitchens, bathrooms, floors, dusting, surfaces",
      "One-time deep cleans or recurring service",
      "Trained, reliable staff",
    ],
  },
  commercial: {
    includes: [
      "Offices, clinics, retail, and shared spaces",
      "Dependable scheduling around business hours",
      "Sanitation-focused cleaning for client-facing areas",
    ],
  },
  vehicle: {
    includes: [
      "Interior and exterior detailing",
      "Mats, windows, vacuuming, deodorizing",
      "Clear coat protectant",
    ],
    notes: "Larger vehicles (trucks, SUVs, RVs) may cost more.",
  },
  yard: {
    includes: [
      "Mowing, edging, trimming",
      "Lawn aeration, dethatching, weed removal",
      "Snow removal and garbage cleanup",
    ],
  },
};

// Re-export a schema tool consumers can reference (unused at runtime here).
export const ServiceIdSchema = z.enum(["residential", "commercial", "vehicle", "yard"]);
