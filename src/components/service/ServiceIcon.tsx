import type { ServiceIcon as ServiceIconName } from "@/config/services";

type ServiceIconProps = {
  icon: ServiceIconName;
  className?: string;
};

export default function ServiceIcon({ className = "h-6 w-6", icon }: ServiceIconProps) {
  const shared = { "aria-hidden": true, className: `${className} fill-none stroke-current stroke-[1.45]`, viewBox: "0 0 24 24" };

  switch (icon) {
    case "shield":
      return <svg {...shared}><path d="M12 3.25 19 6v5.2c0 4.3-2.85 7.78-7 9.55-4.15-1.77-7-5.25-7-9.55V6l7-2.75Z" /><path d="m8.8 11.9 2.1 2.1 4.35-4.35" /></svg>;
    case "layers":
      return <svg {...shared}><path d="m4 7.4 8-4.1 8 4.1L12 11.5 4 7.4Z" /><path d="m4 12.1 8 4.1 8-4.1" /><path d="m4 16.8 8 4.1 8-4.1" /></svg>;
    case "water":
      return <svg {...shared}><path d="M12 3.5c3.2 4.05 5 6.68 5 9.1a5 5 0 1 1-10 0c0-2.42 1.8-5.05 5-9.1Z" /><path d="M9.3 14.1c.4 1.2 1.3 1.85 2.7 1.95" /></svg>;
    case "detail":
      return <svg {...shared}><path d="M4 18.5 12 4l8 14.5" /><path d="M7 13h10" /><path d="M5.5 18.5h13" /></svg>;
    case "storm":
      return <svg {...shared}><path d="M7.25 18.5h9.5a3.75 3.75 0 0 0 .55-7.46A5.55 5.55 0 0 0 6.7 9.4 4.55 4.55 0 0 0 7.25 18.5Z" /><path d="m11.1 14 1.4-2.1h-1.2l1.65-2.7" /></svg>;
    case "guide":
      return <svg {...shared}><path d="M6 3.5h9l3 3v14H6v-17Z" /><path d="M15 3.5v3h3" /><path d="M9 11h6" /><path d="M9 14.5h6" /><path d="M9 18h3.5" /></svg>;
    case "measure":
      return <svg {...shared}><path d="m4 18 14-14 2 2-14 14H4v-2Z" /><path d="m13 7 4 4" /><path d="m9.5 10.5 1.5 1.5" /><path d="m7 13 1.5 1.5" /></svg>;
    case "finish":
      return <svg {...shared}><path d="m4 12 8-8 8 8-8 8-8-8Z" /><path d="m8 12 4 4 4-4" /><path d="m12 8 4 4" /></svg>;
  }
}
