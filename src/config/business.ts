export type BusinessContactValue = {
  label: string;
  value?: string;
  href?: string;
  placeholder: string;
};

export type BusinessServiceAreas = {
  label: string;
  summary: string;
  communities: readonly string[];
  approximateRadiusMiles: number;
  availabilityNote: string;
};

export type BusinessSocialLink = {
  label: string;
  href: string;
};

export type BusinessOwner = {
  name: string;
  role: string;
  tookOverYear: number;
  approximateRoofingExperienceYears: number;
};

export type BusinessVerifiedFacts = {
  minimumCompletedProjects: number;
  licenseNames: readonly string[];
  insured: boolean;
  freeInspections: boolean;
  freeEstimates: boolean;
  workmanshipWarrantyYears: number;
};

export type BusinessConfig = {
  name: string;
  category: string;
  city: string;
  state: string;
  siteUrl?: string;
  phone: BusinessContactValue;
  email: BusinessContactValue;
  address: BusinessContactValue;
  owner: BusinessOwner;
  verifiedFacts: BusinessVerifiedFacts;
  notificationRecipients: {
    email: string;
    sms: string;
  };
  hours?: string[];
  serviceAreas?: BusinessServiceAreas;
  socialLinks: BusinessSocialLink[];
};

function normalizeSiteUrl(value: string | undefined) {
  if (!value?.trim()) return undefined;

  try {
    const url = new URL(value.trim());

    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;

    return url.origin;
  } catch {
    return undefined;
  }
}

/** Verified business data used by contact UI, calls to action, metadata, and server notifications. */
export const business: BusinessConfig = {
  name: "CM Roofing LLC",
  category: "Roofing and Exterior Contractor",
  city: "Berlin",
  state: "Wisconsin",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  phone: {
    label: "Phone",
    value: "(920) 789-0700",
    href: "tel:+19207890700",
    placeholder: "(920) 789-0700",
  },
  email: {
    label: "Email",
    value: "cmroofing28@gmail.com",
    href: "mailto:cmroofing28@gmail.com",
    placeholder: "cmroofing28@gmail.com",
  },
  address: {
    label: "Location",
    value: "Berlin, Wisconsin",
    placeholder: "Berlin, Wisconsin",
  },
  owner: {
    name: "Cade Martin",
    role: "Owner",
    tookOverYear: 2024,
    approximateRoofingExperienceYears: 2,
  },
  verifiedFacts: {
    minimumCompletedProjects: 150,
    licenseNames: ["General Contractor", "Dwelling Contractor"],
    insured: true,
    freeInspections: true,
    freeEstimates: true,
    workmanshipWarrantyYears: 5,
  },
  notificationRecipients: {
    email: "cmroofing28@gmail.com",
    sms: "+19207890700",
  },
  serviceAreas: {
    label: "Service Area",
    summary: "Serving Central Wisconsin from Berlin, WI.",
    communities: ["Berlin", "Ripon", "Green Lake", "Oshkosh", "Fond du Lac", "Winneconne"],
    approximateRadiusMiles: 80,
    availabilityNote:
      "Service is generally available within approximately 80 miles of Berlin. Availability depends on the property location and project scope, so share your address to confirm.",
  },
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574202623657",
    },
  ],
};

/** Resolves a site path only when a verified production origin has been configured. */
export function getAbsoluteSiteUrl(path: string) {
  if (!business.siteUrl) return undefined;

  return new URL(path, `${business.siteUrl}/`).toString();
}
