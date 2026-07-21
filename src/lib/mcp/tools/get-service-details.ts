import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES, SERVICE_DETAILS } from "./list-services";

export default defineTool({
  name: "get_service_details",
  title: "Get service details",
  description: "Get the included items and any pricing notes for a specific JAMI Cleaning service.",
  inputSchema: {
    service_id: z
      .enum(["residential", "commercial", "vehicle", "yard"])
      .describe("The service id. One of: residential, commercial, vehicle, yard."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ service_id }) => {
    const service = SERVICES.find((s) => s.id === service_id);
    const details = SERVICE_DETAILS[service_id];
    if (!service || !details) {
      return {
        content: [{ type: "text", text: `Unknown service: ${service_id}` }],
        isError: true,
      };
    }
    const payload = { ...service, ...details };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
