import {
  CanvasTexture,
  LinearFilter,
  LinearMipmapLinearFilter,
  RepeatWrapping,
  SRGBColorSpace,
} from "three";
import type { RoofLayerMaterial } from "@/config/roofLayers";

export type RoofQuality = "mobile" | "desktop";

type TextureRecipe = RoofLayerMaterial | "ice-water" | "metal";

const textureRepeats: Record<TextureRecipe, readonly [number, number]> = {
  shingles: [3, 5],
  underlayment: [2, 3],
  "ice-water": [2, 2],
  deck: [3, 2],
  framing: [2, 6],
  insulation: [2, 3],
  interior: [2, 2],
  metal: [1, 3],
};

function mulberry32(seed: number) {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let next = value;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function fillNoise(
  context: CanvasRenderingContext2D,
  size: number,
  random: () => number,
  count: number,
  palette: readonly string[],
  radius: readonly [number, number],
) {
  for (let index = 0; index < count; index += 1) {
    const dotRadius = radius[0] + random() * (radius[1] - radius[0]);
    context.fillStyle = palette[Math.floor(random() * palette.length)];
    context.beginPath();
    context.arc(random() * size, random() * size, dotRadius, 0, Math.PI * 2);
    context.fill();
  }
}

function drawShingles(context: CanvasRenderingContext2D, size: number, random: () => number) {
  context.fillStyle = "#383732";
  context.fillRect(0, 0, size, size);
  fillNoise(context, size, random, size * 7, ["#191916", "#4b4a43", "#625e53", "#292925"], [0.25, 1.15]);

  context.globalAlpha = 0.42;
  context.strokeStyle = "#0c0c0b";
  context.lineWidth = Math.max(1, size / 96);
  for (let y = size * 0.2; y < size; y += size * 0.2) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(size, y);
    context.stroke();
  }
  context.globalAlpha = 1;
}

function drawMembrane(context: CanvasRenderingContext2D, size: number, random: () => number, iceWater: boolean) {
  context.fillStyle = iceWater ? "#27333a" : "#364149";
  context.fillRect(0, 0, size, size);
  fillNoise(
    context,
    size,
    random,
    Math.round(size * 1.25),
    iceWater ? ["#51687244", "#17212755"] : ["#6b7c8444", "#202a3055"],
    [0.35, 0.9],
  );

  context.save();
  context.globalAlpha = iceWater ? 0.28 : 0.2;
  context.strokeStyle = iceWater ? "#a9c4cf" : "#d7e2e5";
  context.lineWidth = Math.max(1, size / 128);
  context.setLineDash([size * 0.08, size * 0.045]);
  for (let y = size * 0.25; y < size; y += size * 0.25) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(size, y);
    context.stroke();
  }
  context.restore();

  context.save();
  context.globalAlpha = 0.2;
  context.fillStyle = "#ffffff";
  context.font = `600 ${Math.max(6, Math.round(size * 0.055))}px sans-serif`;
  context.textAlign = "center";
  context.fillText(iceWater ? "SELF-ADHERED BARRIER" : "SYNTHETIC UNDERLAYMENT", size / 2, size * 0.57);
  context.restore();
}

function drawOsb(context: CanvasRenderingContext2D, size: number, random: () => number) {
  context.fillStyle = "#a77b50";
  context.fillRect(0, 0, size, size);

  const chipCount = Math.round(size * 4.5);
  const chipPalette = ["#c49966", "#795331", "#d1ad79", "#8c623d", "#b88d5d"];
  for (let index = 0; index < chipCount; index += 1) {
    const x = random() * size;
    const y = random() * size;
    const width = size * (0.018 + random() * 0.055);
    const height = size * (0.005 + random() * 0.012);
    context.save();
    context.translate(x, y);
    context.rotate(random() * Math.PI);
    context.fillStyle = chipPalette[Math.floor(random() * chipPalette.length)];
    context.globalAlpha = 0.42 + random() * 0.42;
    context.fillRect(-width / 2, -height / 2, width, height);
    context.restore();
  }

  context.strokeStyle = "#5c3e2788";
  context.lineWidth = Math.max(1, size / 128);
  context.strokeRect(0.5, 0.5, size - 1, size - 1);
}

function drawLumber(context: CanvasRenderingContext2D, size: number, random: () => number) {
  context.fillStyle = "#aa7d50";
  context.fillRect(0, 0, size, size);
  context.lineWidth = Math.max(0.7, size / 220);

  for (let index = 0; index < 30; index += 1) {
    const x = random() * size;
    const amplitude = size * (0.006 + random() * 0.014);
    context.strokeStyle = index % 3 === 0 ? "#69452566" : "#d5aa7566";
    context.beginPath();
    for (let y = -4; y <= size + 4; y += 5) {
      const wave = Math.sin((y / size) * Math.PI * (2 + random() * 2)) * amplitude;
      if (y === -4) context.moveTo(x + wave, y);
      else context.lineTo(x + wave, y);
    }
    context.stroke();
  }
}

function drawInsulation(context: CanvasRenderingContext2D, size: number, random: () => number) {
  context.fillStyle = "#c8a66f";
  context.fillRect(0, 0, size, size);
  fillNoise(context, size, random, size * 5, ["#ead49a55", "#8d704655", "#fff0bd44"], [0.3, 1.2]);

  context.globalAlpha = 0.32;
  context.strokeStyle = "#f4dfaa";
  context.lineWidth = Math.max(0.7, size / 170);
  for (let index = 0; index < 30; index += 1) {
    const y = random() * size;
    context.beginPath();
    context.moveTo(0, y);
    context.bezierCurveTo(size * 0.3, y + random() * 8 - 4, size * 0.68, y + random() * 8 - 4, size, y);
    context.stroke();
  }
  context.globalAlpha = 1;
}

function drawDrywall(context: CanvasRenderingContext2D, size: number, random: () => number) {
  context.fillStyle = "#d8d4c8";
  context.fillRect(0, 0, size, size);
  fillNoise(context, size, random, Math.round(size * 0.7), ["#ffffff33", "#77736b22"], [0.3, 0.8]);
  context.strokeStyle = "#aaa69c44";
  context.lineWidth = Math.max(1, size / 128);
  context.beginPath();
  context.moveTo(0, size / 2);
  context.lineTo(size, size / 2);
  context.stroke();
}

function drawMetal(context: CanvasRenderingContext2D, size: number, random: () => number) {
  const gradient = context.createLinearGradient(0, 0, size, 0);
  gradient.addColorStop(0, "#555853");
  gradient.addColorStop(0.48, "#a4a69d");
  gradient.addColorStop(0.55, "#6f726c");
  gradient.addColorStop(1, "#383a37");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  fillNoise(context, size, random, Math.round(size * 0.6), ["#ffffff22", "#00000022"], [0.2, 0.6]);
}

export function createRoofTexture(recipe: TextureRecipe, quality: RoofQuality) {
  const size = quality === "mobile" ? 96 : 160;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("Unable to create procedural roof material texture.");

  const recipeIndex = Object.keys(textureRepeats).indexOf(recipe) + 1;
  const random = mulberry32(0x434d5200 + recipeIndex * 7919);

  if (recipe === "shingles") drawShingles(context, size, random);
  else if (recipe === "underlayment") drawMembrane(context, size, random, false);
  else if (recipe === "ice-water") drawMembrane(context, size, random, true);
  else if (recipe === "deck") drawOsb(context, size, random);
  else if (recipe === "framing") drawLumber(context, size, random);
  else if (recipe === "insulation") drawInsulation(context, size, random);
  else if (recipe === "interior") drawDrywall(context, size, random);
  else drawMetal(context, size, random);

  const texture = new CanvasTexture(canvas);
  const [repeatX, repeatY] = textureRepeats[recipe];
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.colorSpace = SRGBColorSpace;
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.anisotropy = quality === "mobile" ? 2 : 4;
  texture.needsUpdate = true;

  return texture;
}
