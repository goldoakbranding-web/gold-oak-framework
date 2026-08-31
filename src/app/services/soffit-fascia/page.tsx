import SoffitFasciaServicePage from "@/components/service/soffit-fascia/SoffitFasciaServicePage";
import { soffitFasciaService } from "@/config/services/soffitFascia";
import { createServiceMetadata } from "@/lib/service-metadata";

export const metadata = createServiceMetadata(soffitFasciaService);

export default function SoffitFasciaPage() {
  return <SoffitFasciaServicePage />;
}
