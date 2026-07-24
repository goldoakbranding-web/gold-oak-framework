import { guttersService } from "./gutters";
import { insuranceClaimsService } from "./insuranceClaims";
import { roofingService } from "./roofing";
import { sidingService } from "./siding";
import { soffitFasciaService } from "./soffitFascia";
import { stormDamageService } from "./stormDamage";
import { serviceSlugs, type ServiceConfig, type ServiceSlug } from "./types";

export * from "./types";

export const servicesBySlug: Record<ServiceSlug, ServiceConfig> = {
  roofing: roofingService,
  siding: sidingService,
  gutters: guttersService,
  "soffit-fascia": soffitFasciaService,
  "storm-damage": stormDamageService,
  "insurance-claims": insuranceClaimsService,
};

export const serviceConfigs = serviceSlugs.map((slug) => servicesBySlug[slug]);

export function getServiceConfig(slug: ServiceSlug) {
  return servicesBySlug[slug];
}
