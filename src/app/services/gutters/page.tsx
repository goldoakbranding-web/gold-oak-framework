import ServicePage from "@/components/service/ServicePage";
import { guttersService } from "@/config/services/gutters";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(guttersService);

export default function GuttersPage() {
  return <ServicePage service={guttersService} />;
}
