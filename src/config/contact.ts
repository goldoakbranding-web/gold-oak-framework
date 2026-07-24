export const serviceOptions = [
  "Roof Replacement",
  "Roof Repair",
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
export type EstimateSubmissionState = "idle" | "submitting" | "success" | "development" | "error";

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
  developmentNotice: string;
  privacyNotice: string;
  image?: ContactImage;
  trustItems: ContactTrustItem[];
};

export const contactConfig: ContactConfig = {
  eyebrow: "Start your project",
  headline: "Request Your Free Estimate",
  description:
    `Tell us a little about your property and the service you need. A member of the ${business.name} team will follow up to discuss your project and next steps.`,
  formTitle: "Project details",
  formDescription: "Complete the fields below to prepare an estimate request.",
  submitLabel: "Request My Free Estimate",
  successNotice: "Thank you — your estimate request has been sent. Our team will be in touch soon.",
  developmentNotice:
    "Your request was validated. Notification credentials are not configured in this environment, so the formatted email and text payloads were logged server-side instead of delivered.",
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
import { business } from "./business";
