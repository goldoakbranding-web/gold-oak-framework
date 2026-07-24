import ServicePage from "@/components/service/ServicePage";
import { soffitFasciaService } from "@/config/services/soffitFascia";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(soffitFasciaService);

export default function SoffitFasciaPage() {
  return <ServicePage service={soffitFasciaService} />;
}
