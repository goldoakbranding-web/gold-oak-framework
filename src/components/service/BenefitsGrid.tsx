import type { ServiceConfig } from "@/config/services";
import ServiceTrust from "./ServiceTrust";

/** Kept as a compatibility boundary while the old benefits grid becomes the editorial trust section. */
export default function BenefitsGrid({ service }: { service: ServiceConfig }) {
  return <ServiceTrust service={service} />;
}
