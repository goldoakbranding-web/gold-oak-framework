export type EstimateLead = {
  fullName: string;
  phone: string;
  email: string;
  propertyLocation: string;
  serviceNeeded: string;
  preferredContact: string;
  projectDetails: string;
  consent: boolean;
};

export type EstimateLeadInput = EstimateLead & {
  website: string;
  formStartedAt: number;
};

export type NotificationEmail = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

export type NotificationSms = {
  to: string;
  body: string;
};

export type NotificationChannelResult = {
  channel: "email" | "sms";
  provider?: "resend" | "twilio";
  status: "delivered" | "not-configured" | "failed";
};

export type NotificationDeliveryReport = {
  delivered: true;
  email: NotificationChannelResult;
  sms: NotificationChannelResult;
};
