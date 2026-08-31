import { business } from "./business";

export const serviceOptions = [
  "Roofing",
  "Roof Replacement",
  "Roof Repair",
  "Commercial Roofing",
  "New Construction Roofing",
  "Storm Damage",
  "Siding",
  "Gutters",
  "Soffit & Fascia",
  "Insurance Claim Assistance",
  "Other",
] as const;

export const preferredContactOptions = ["Phone", "Text", "Email"] as const;

export type ServiceOption = (typeof serviceOptions)[number];
export type PreferredContactMethod = (typeof preferredContactOptions)[number];

export type EstimateFormValues = {
  fullName: string;
  phone: string;
  email: string;
  propertyLocation: string;
  serviceNeeded: ServiceOption | "";
  preferredContact: PreferredContactMethod | "";
  projectDetails: string;
  consent: boolean;
  website: string;
  formStartedAt: number;
};

export type EstimateFormField = Exclude<keyof EstimateFormValues, "website" | "formStartedAt">;
export type EstimateFormErrors = Partial<Record<EstimateFormField, string>>;
export type EstimateSubmissionState = "idle" | "submitting" | "success" | "error";

export type ContactImage = {
  src: string;
  alt: string;
  position?: string;
};

export type ContactTrustItem = {
  id: string;
  label: string;
};

export type ContactConfig = {
  eyebrow: string;
  headline: string;
  description: string;
  formTitle: string;
  formDescription: string;
  submitLabel: string;
  successNotice: string;
  failureNotice: string;
  privacyNotice: string;
  image?: ContactImage;
  trustItems: ContactTrustItem[];
};

export const estimateFailureNotice =
  "We couldn't send your request right now. Please try again, call (920) 789-0700, or email cmroofing28@gmail.com.";

export const contactConfig: ContactConfig = {
  eyebrow: "Start your project",
  headline: "Request Your Free Estimate",
  description:
    `Tell us a little about your property and the service you need. A member of the ${business.name} team will follow up to discuss your project and next steps.`,
  formTitle: "Project details",
  formDescription: "Complete the fields below to prepare an estimate request.",
  submitLabel: "Request My Free Estimate",
  successNotice: "Our team will follow up using your preferred contact method.",
  failureNotice: estimateFailureNotice,
  privacyNotice: "Your details are used only to respond to this estimate request. No payment information is requested.",
  image: {
    src: "/images/projects/project-4.jpg",
    alt: "Residential roof installation in progress",
    position: "center 54%",
  },
  trustItems: [
    { id: "project-focused", label: "Project-focused questions" },
    { id: "contact-preference", label: "Your preferred contact method" },
    { id: "no-financial-data", label: "No payment details requested" },
  ],
};
