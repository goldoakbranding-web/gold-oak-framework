"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import type {
  ContactConfig,
  EstimateFormErrors,
  EstimateFormField,
  EstimateFormValues,
  EstimateSubmissionState,
  ServiceOption,
} from "@/config/contact";
import { preferredContactOptions, serviceOptions } from "@/config/contact";
import { business } from "@/config/business";
import FormField from "./FormField";

type EstimateFormProps = {
  config: ContactConfig;
  compact?: boolean;
  defaultService?: ServiceOption;
};

type EstimateSubmissionResult = {
  status: "success";
};

type EstimateApiError = {
  error?: string;
  fieldErrors?: EstimateFormErrors;
};

class EstimateSubmissionError extends Error {
  fieldErrors?: EstimateFormErrors;

  constructor(message: string, fieldErrors?: EstimateFormErrors) {
    super(message);
    this.name = "EstimateSubmissionError";
    this.fieldErrors = fieldErrors;
  }
}

const emptyValues: EstimateFormValues = {
  fullName: "",
  phone: "",
  email: "",
  propertyLocation: "",
  serviceNeeded: "",
  preferredContact: "",
  projectDetails: "",
  consent: false,
  website: "",
  formStartedAt: 0,
};

function getInitialValues(defaultService?: ServiceOption, formStartedAt = Date.now()): EstimateFormValues {
  return {
    ...emptyValues,
    serviceNeeded: defaultService ?? "",
    formStartedAt,
  };
}

const controlClassName =
  "min-h-13 w-full rounded-xl border border-white/12 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/30 hover:border-white/22 focus:border-[#d8bd79]/75 focus:bg-black/30 focus:ring-2 focus:ring-[#d8bd79]/20 disabled:cursor-not-allowed disabled:opacity-55";

function validate(values: EstimateFormValues): EstimateFormErrors {
  const errors: EstimateFormErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");
  const phoneRequired = values.preferredContact === "Phone" || values.preferredContact === "Text";
  const emailRequired = values.preferredContact === "Email";

  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (phoneRequired && !values.phone.trim()) {
    errors.phone = "Enter a phone number.";
  } else if (values.phone.trim() && (phoneDigits.length < 10 || phoneDigits.length > 15)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (emailRequired && !values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.propertyLocation.trim()) errors.propertyLocation = "Enter your property address or city.";
  if (!values.serviceNeeded) errors.serviceNeeded = "Choose the service you need.";
  if (!values.preferredContact) errors.preferredContact = "Choose how you prefer to be contacted.";
  if (!values.consent) errors.consent = "Confirm that we may use these details to discuss your request.";

  return errors;
}

/** The API route repeats validation, sanitization, spam checks, rate limiting, and delivery server-side. */
async function submitEstimateRequest(values: EstimateFormValues): Promise<EstimateSubmissionResult> {
  const response = await fetch("/api/estimate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const payload = await response.json().catch(() => null) as (EstimateSubmissionResult & EstimateApiError) | null;

  if (!response.ok || payload?.status !== "success") {
    throw new EstimateSubmissionError(payload?.error ?? "Unable to submit this request.", payload?.fieldErrors);
  }

  return { status: payload.status };
}

export default function EstimateForm({ compact = false, config, defaultService }: EstimateFormProps) {
  const [values, setValues] = useState<EstimateFormValues>(() => getInitialValues(defaultService));
  const [errors, setErrors] = useState<EstimateFormErrors>({});
  const [submissionState, setSubmissionState] = useState<EstimateSubmissionState>("idle");
  const previousDefaultService = useRef(defaultService);

  useEffect(() => {
    if (previousDefaultService.current === defaultService) return;

    previousDefaultService.current = defaultService;
    setValues(getInitialValues(defaultService));
    setErrors({});
    setSubmissionState("idle");
  }, [defaultService]);

  function resetValues() {
    setValues({ ...getInitialValues(defaultService), formStartedAt: Date.now() });
  }

  function updateField<Field extends EstimateFormField>(field: Field, value: EstimateFormValues[Field]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current, [field]: undefined };

      if (field === "preferredContact") {
        next.phone = undefined;
        next.email = undefined;
      }

      return next;
    });
    if (submissionState !== "idle") setSubmissionState("idle");
  }

  function handleTextChange(field: Exclude<EstimateFormField, "consent">) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(field, event.target.value as EstimateFormValues[typeof field]);
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);

    if (values.website) {
      setSubmissionState("error");
      return;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmissionState("idle");
      return;
    }

    setSubmissionState("submitting");

    try {
      const result = await submitEstimateRequest(values);
      setSubmissionState(result.status);
      resetValues();
    } catch (error) {
      if (error instanceof EstimateSubmissionError && error.fieldErrors) setErrors(error.fieldErrors);
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";
  const formDisabled = isSubmitting;
  const phoneRequired = values.preferredContact === "Phone" || values.preferredContact === "Text";
  const emailRequired = values.preferredContact === "Email";

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[.045] p-5 shadow-[0_30px_90px_rgba(0,0,0,.34)] backdrop-blur-md sm:rounded-[32px] sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/80 to-transparent" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d8bd79]/[.09] blur-[90px]" />

      <div className="relative">
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#d8bd79]">Estimate request</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-.04em] text-white sm:text-3xl">{config.formTitle}</h3>
        <p className="mt-3 max-w-lg text-sm leading-6 text-white/58">{config.formDescription}</p>

        <form className={compact ? "mt-6 space-y-4 sm:mt-8 sm:space-y-5" : "mt-8 space-y-5"} noValidate onFocusCapture={() => {
          if (!values.formStartedAt) setValues((current) => ({ ...current, formStartedAt: Date.now() }));
        }} onSubmit={handleSubmit}>
          <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
            <label htmlFor="estimate-website">Website</label>
            <input
              autoComplete="off"
              id="estimate-website"
              name="website"
              onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
              tabIndex={-1}
              type="text"
              value={values.website}
            />
          </div>

          <div className={`grid sm:grid-cols-2 ${compact ? "gap-4 sm:gap-5" : "gap-5"}`}>
            <FormField error={errors.fullName} id="estimate-full-name" label="Full Name" required>
              <input
                aria-describedby={errors.fullName ? "estimate-full-name-error" : undefined}
                aria-invalid={Boolean(errors.fullName)}
                autoComplete="name"
                className={controlClassName}
                disabled={formDisabled}
                id="estimate-full-name"
                name="fullName"
                onChange={handleTextChange("fullName")}
                required
                type="text"
                value={values.fullName}
              />
            </FormField>
            <FormField error={errors.phone} hint={phoneRequired ? undefined : "Optional"} id="estimate-phone" label="Phone Number" required={phoneRequired}>
              <input
                aria-describedby={errors.phone ? "estimate-phone-error" : undefined}
                aria-invalid={Boolean(errors.phone)}
                autoComplete="tel"
                className={controlClassName}
                disabled={formDisabled}
                id="estimate-phone"
                inputMode="tel"
                name="phone"
                onChange={handleTextChange("phone")}
                required={phoneRequired}
                type="tel"
                value={values.phone}
              />
            </FormField>
          </div>

          <div className={`grid sm:grid-cols-2 ${compact ? "gap-4 sm:gap-5" : "gap-5"}`}>
            <FormField error={errors.email} hint={emailRequired ? undefined : "Optional"} id="estimate-email" label="Email Address" required={emailRequired}>
              <input
                aria-describedby={errors.email ? "estimate-email-error" : undefined}
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                className={controlClassName}
                disabled={formDisabled}
                id="estimate-email"
                name="email"
                onChange={handleTextChange("email")}
                required={emailRequired}
                type="email"
                value={values.email}
              />
            </FormField>
            <FormField error={errors.propertyLocation} id="estimate-property-location" label="Property Address or City" required>
              <input
                aria-describedby={errors.propertyLocation ? "estimate-property-location-error" : undefined}
                aria-invalid={Boolean(errors.propertyLocation)}
                autoComplete="street-address"
                className={controlClassName}
                disabled={formDisabled}
                id="estimate-property-location"
                name="propertyLocation"
                onChange={handleTextChange("propertyLocation")}
                required
                type="text"
                value={values.propertyLocation}
              />
            </FormField>
          </div>

          <div className={`grid sm:grid-cols-2 ${compact ? "gap-4 sm:gap-5" : "gap-5"}`}>
            <FormField error={errors.serviceNeeded} id="estimate-service" label="Service Needed" required>
              <select
                aria-describedby={errors.serviceNeeded ? "estimate-service-error" : undefined}
                aria-invalid={Boolean(errors.serviceNeeded)}
                className={controlClassName}
                disabled={formDisabled}
                id="estimate-service"
                name="serviceNeeded"
                onChange={handleTextChange("serviceNeeded")}
                required
                value={values.serviceNeeded}
              >
                <option disabled value="">Select a service</option>
                {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </FormField>
            <FormField error={errors.preferredContact} id="estimate-preferred-contact" label="Preferred Contact Method" required>
              <select
                aria-describedby={errors.preferredContact ? "estimate-preferred-contact-error" : undefined}
                aria-invalid={Boolean(errors.preferredContact)}
                className={controlClassName}
                disabled={formDisabled}
                id="estimate-preferred-contact"
                name="preferredContact"
                onChange={handleTextChange("preferredContact")}
                required
                value={values.preferredContact}
              >
                <option disabled value="">Select a preference</option>
                {preferredContactOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </FormField>
          </div>

          <FormField hint="Optional" id="estimate-project-details" label="Project Details">
            <textarea
              className={`${controlClassName} resize-y py-3 ${compact ? "min-h-24 sm:min-h-30" : "min-h-30"}`}
              disabled={formDisabled}
              id="estimate-project-details"
              name="projectDetails"
              onChange={handleTextChange("projectDetails")}
              rows={4}
              value={values.projectDetails}
            />
          </FormField>

          <div>
            <label className={`flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/15 transition hover:border-white/20 has-[:focus-visible]:border-[#d8bd79]/70 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#d8bd79]/20 ${compact ? "p-3 sm:p-4" : "p-4"}`} htmlFor="estimate-consent">
              <input
                aria-describedby={errors.consent ? "estimate-consent-error" : undefined}
                aria-invalid={Boolean(errors.consent)}
                checked={values.consent}
                className="mt-0.5 h-4 w-4 shrink-0 appearance-none rounded border border-white/30 bg-black/30 transition checked:border-[#d8bd79] checked:bg-[#d8bd79] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3]"
                disabled={formDisabled}
                id="estimate-consent"
                name="consent"
                onChange={(event) => updateField("consent", event.target.checked)}
                required
                type="checkbox"
              />
              <span className="text-xs leading-5 text-white/62">I agree that {business.name} may use the information above to discuss this estimate request.</span>
            </label>
            {errors.consent && <p className="mt-2 text-xs leading-5 text-[#ead7a3]" id="estimate-consent-error" role="alert">{errors.consent}</p>}
          </div>

          {submissionState === "success" && (
            <div aria-live="polite" className="rounded-xl border border-[#d8bd79]/30 bg-[#d8bd79]/[.08] px-4 py-3 text-sm leading-6 text-[#f1dfb0]" role="status">
              {config.successNotice}
            </div>
          )}
          {submissionState === "error" && (
            <div aria-live="assertive" className="rounded-xl border border-red-300/30 bg-red-300/[.08] px-4 py-3 text-sm leading-6 text-red-100" role="alert">
              {config.failureNotice}
            </div>
          )}

          <button
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#d8bd79] px-6 text-center text-[11px] font-bold uppercase tracking-[.16em] text-[#17130a] shadow-[0_14px_34px_rgba(216,189,121,.16)] transition hover:-translate-y-0.5 hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] disabled:cursor-wait disabled:opacity-65 motion-reduce:transform-none"
            disabled={formDisabled}
            type="submit"
          >
            {isSubmitting ? "Preparing Request…" : config.submitLabel}
          </button>
          <p className="text-center text-[10px] leading-5 text-white/42">Fields marked <span className="text-[#d8bd79]">*</span> are required. {config.privacyNotice}</p>
        </form>
      </div>
    </div>
  );
}
