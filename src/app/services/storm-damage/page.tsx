import ServicePage from "@/components/service/ServicePage";
import { stormDamageService } from "@/config/services/stormDamage";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(stormDamageService);

export default function StormDamagePage() {
  return <ServicePage service={stormDamageService} />;
}
