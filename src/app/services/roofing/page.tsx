import ServicePage from "@/components/service/ServicePage";
import { roofingService } from "@/config/services/roofing";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(roofingService);

export default function RoofingPage() {
  return <ServicePage service={roofingService} />;
}
