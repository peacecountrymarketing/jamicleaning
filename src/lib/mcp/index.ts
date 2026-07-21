import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceDetailsTool from "./tools/get-service-details";
import getContactInfoTool from "./tools/get-contact-info";
import getTrustInfoTool from "./tools/get-trust-info";

export default defineMcp({
  name: "jami-cleaning-mcp",
  title: "JAMI Cleaning",
  version: "0.1.0",
  instructions:
    "Public tools for JAMI Cleaning Inc, a residential and commercial cleaning, vehicle detailing, and yard maintenance company in Grande Prairie, Alberta. Use `list_services` to see what is offered, `get_service_details` for what a specific service includes, `get_contact_info` for phone/email/hours, and `get_trust_info` for credentials and guarantees.",
  tools: [listServicesTool, getServiceDetailsTool, getContactInfoTool, getTrustInfoTool],
});
