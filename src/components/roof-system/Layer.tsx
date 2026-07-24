type Props = {
  title: string;
  color: string;
  height: number;
  active: boolean;
};

export default function Layer({
  title,
  color,
  height,
  active,
}: Props) {
  return (
    <div
      className={`relative transition-all duration-500 ${
        active ? "-translate-y-2 scale-[1.02]" : ""
      }`}
    >
      <div
        className="mx-auto rounded-lg border border-white/10 shadow-2xl"
        style={{
          width: "420px",
          height,
          background: color,
        }}
      />

      <p className="mt-2 text-center text-sm text-white/70">
        {title}
      </p>
    </div>
  );
}