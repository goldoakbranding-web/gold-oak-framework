import ServicePage from "@/components/service/ServicePage";
import StormDamageEscalation from "@/components/service/storm-damage/StormDamageEscalation";
import { stormDamageService } from "@/config/services/stormDamage";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(stormDamageService);

export default function StormDamagePage() {
  return <ServicePage afterOptions={<StormDamageEscalation />} service={stormDamageService} />;
}
