export type EstimateLead = {
  fullName: string;
  phone: string;
  email: string;
  propertyLocation: string;
  serviceNeeded: string;
  preferredContact: string;
  projectDetails: string;
};

export type EstimateLeadInput = EstimateLead & {
  consent: boolean;
  website: string;
  formStartedAt: number;
};

export type NotificationEmail = {
  to: string;
  from?: string;
  subject: string;
  text: string;
  html: string;
};

export type NotificationSms = {
  to: string;
  body: string;
};

export type DeliveryMode = "sent" | "development";
