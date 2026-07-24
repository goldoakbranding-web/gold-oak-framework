import ServicePage from "@/components/service/ServicePage";
import { insuranceClaimsService } from "@/config/services/insuranceClaims";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(insuranceClaimsService);

export default function InsuranceClaimsPage() {
  return <ServicePage service={insuranceClaimsService} />;
}
