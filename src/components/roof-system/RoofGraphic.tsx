"use client";

import { useState } from "react";

export default function RoofGraphic() {
  const [hovered, setHovered] = useState<number | null>(null);

  const layers = [
    {
      id: 0,
      name: "Ridge Cap",
      color: "#4a4a4a",
      height: 10,
    },
    {
      id: 1,
      name: "Architectural Shingles",
      color: "#303030",
      height: 28,
    },
    {
      id: 2,
      name: "Starter Strip",
      color: "#515151",
      height: 8,
    },
    {
      id: 3,
      name: "Ice & Water Shield",
      color: "#567ca6",
      height: 8,
    },
    {
      id: 4,
      name: "Synthetic Underlayment",
      color: "#252525",
      height: 12,
    },
    {
      id: 5,
      name: "Roof Deck",
      color: "#c69867",
      height: 24,
    },
  ];

  return (
    <div className="relative flex justify-center py-24">

      <div
        className="relative"
        style={{
          perspective: "1800px",
        }}
      >

        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg) rotateZ(-45deg)",
          }}
        >
          {layers.map((layer, index) => {

          const explode =
            hovered === layer.id
              ? -55
              : index * -14;

          return (

            <div
              key={layer.id}
              onMouseEnter={() => setHovered(layer.id)}
              onMouseLeave={() => setHovered(null)}
              className="absolute left-1/2 top-1/2 transition-all duration-500"
              style={{
                transform: `
                  translate(-50%, -50%)
                  translateZ(${explode}px)
                  translateY(${index * 18}px)
                `,
              }}
            >

              {/* LEFT ROOF SLOPE */}

              <div
                className="absolute rounded-sm shadow-2xl"
                style={{
                  width: "330px",
                  height: `${layer.height}px`,
                  background: `linear-gradient(135deg,
                    rgba(255,255,255,.12),
                    ${layer.color})`,
                  transformOrigin: "right center",
                  transform:
                    "rotateY(45deg) skewY(-22deg)",
                }}
              />

              {/* RIGHT ROOF SLOPE */}

              <div
                className="absolute rounded-sm shadow-2xl"
                style={{
                  width: "330px",
                  height: `${layer.height}px`,
                  background: `linear-gradient(225deg,
                    rgba(255,255,255,.10),
                    ${layer.color})`,
                  transformOrigin: "left center",
                  transform:
                    "translateX(330px) rotateY(-45deg) skewY(22deg)",
                }}
              />

              {/* RIDGE */}

              <div
                className="absolute"
                style={{
                  width: "6px",
                  height: `${layer.height}px`,
                  background: "#9a9a9a",
                  left: "327px",
                }}
              />              {/* TOP HIGHLIGHT */}

              <div
                className="absolute pointer-events-none"
                style={{
                  width: "660px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,.55), transparent)",
                  top: "-2px",
                }}
              />

              {/* SOFT SHADOW */}

              <div
                className="absolute -z-10 blur-2xl transition-all duration-500"
                style={{
                  width: "720px",
                  height: "60px",
                  background: "rgba(0,0,0,.35)",
                  borderRadius: "999px",
                  top: "60px",
                  left: "-30px",
                  transform: `translateZ(${explode - 12}px)`,
                }}
              />

              {/* LABEL */}

              <div
                className="absolute whitespace-nowrap transition-all duration-300"
                style={{
                  left: "760px",
                  top: "-4px",
                  color:
                    hovered === layer.id
                      ? "#ffffff"
                      : "rgba(255,255,255,.65)",
                }}
              >

                <div className="flex items-center gap-4">

                  <div
                    className="h-px w-16"
                    style={{
                      background:
                        hovered === layer.id
                          ? "#C3A35B"
                          : "rgba(255,255,255,.25)",
                    }}
                  />

                  <span
                    className={`text-sm font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
                      hovered === layer.id ? "translate-x-2" : ""
                    }`}
                  >
                    {layer.name}
                  </span>

                </div>

              </div>

            </div>

          );

          })}
        </div>
      </div>
    </div>
  );
}
