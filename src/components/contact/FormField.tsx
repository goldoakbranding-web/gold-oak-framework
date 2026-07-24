import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export default function FormField({ children, error, hint, id, label, required }: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/82" htmlFor={id}>
          {label}
          {required && <span aria-hidden="true" className="ml-1 text-[#d8bd79]">*</span>}
        </label>
        {hint && <span className="text-[10px] text-white/40" id={hintId}>{hint}</span>}
      </div>
      {children}
      {error && (
        <p className="mt-2 text-xs leading-5 text-[#ead7a3]" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
