export type BusinessContactValue = {
  label: string;
  value?: string;
  href?: string;
  placeholder: string;
};

export type BusinessServiceAreas = {
  label: string;
  summary: string;
};

export type BusinessSocialLink = {
  label: string;
  href: string;
};

export type BusinessConfig = {
  name: string;
  category: string;
  city: string;
  state: string;
  phone: BusinessContactValue;
  email: BusinessContactValue;
  address: BusinessContactValue;
  notificationRecipients: {
    email: string;
    sms: string;
  };
  hours?: string[];
  serviceAreas?: BusinessServiceAreas;
  socialLinks: BusinessSocialLink[];
};

/** Verified business data used by contact UI, calls to action, metadata, and server notifications. */
export const business: BusinessConfig = {
  name: "CM Roofing LLC",
  category: "Residential Roofing Contractor",
  city: "Berlin",
  state: "Wisconsin",
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
  notificationRecipients: {
    email: "cmroofing28@gmail.com",
    sms: "+19207890700",
  },
  socialLinks: [],
};
