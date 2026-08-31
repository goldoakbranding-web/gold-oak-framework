import ServicePage from "@/components/service/ServicePage";
import SidingProductSelector from "@/components/service/siding/SidingProductSelector";
import { sidingService } from "@/config/services/siding";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(sidingService);

export default function SidingPage() {
  return <ServicePage afterOptions={<SidingProductSelector />} service={sidingService} />;
}
