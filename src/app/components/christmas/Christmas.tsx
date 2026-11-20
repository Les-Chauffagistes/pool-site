"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import "./christmas.css";

const START = { month: 11, day: 20 };
const END = { month: 1, day: 6 };

const BULB_COLORS = ["#ff8a00", "#ffc247", "#ff5a1f", "#fff1c9"];
const SWAG_WIDTH = 120;
const SWAG_BULB_OFFSETS = [0, 7.8, 12.4, 14, 12.4, 7.8];
const BULB_SPACING = SWAG_WIDTH / SWAG_BULB_OFFSETS.length;

function isSeason(now: Date) {
  const value = (now.getMonth() + 1) * 100 + now.getDate();
  return value >= START.month * 100 + START.day || value <= END.month * 100 + END.day;
}

function shouldDecorate() {
  const forced = new URLSearchParams(window.location.search).get("xmas");
  if (forced === "1") return true;
  if (forced === "0") return false;
  return isSeason(new Date());
}

const noopSubscribe = () => () => {};

function subscribeResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

export default function Christmas() {
  // Faux côté serveur / à l'hydratation, évalué côté client ensuite.
  const active = useSyncExternalStore(noopSubscribe, shouldDecorate, () => false);
  const bulbCount = useSyncExternalStore(
    subscribeResize,
    () => Math.ceil(window.innerWidth / BULB_SPACING) + 1,
    () => 0,
  );

  useEffect(() => {
    if (!active) return;
    document.documentElement.dataset.xmas = "on";
    return () => {
      delete document.documentElement.dataset.xmas;
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <Snow />
      <div className="xmas-garland" aria-hidden="true">
        {Array.from({ length: bulbCount }, (_, i) => (
          <span
            key={i}
            className="xmas-bulb"
            style={{
              left: i * BULB_SPACING,
              top: SWAG_BULB_OFFSETS[i % SWAG_BULB_OFFSETS.length],
              color: BULB_COLORS[i % BULB_COLORS.length],
              animationDelay: `${(i % 5) * 0.55}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

/**
 * Neige en 3 couches de profondeur + quelques flocons chauds.
 *
 * Le canvas ne fait que la taille de l'écran (léger). Les flocons bouclent verticalement
 * (sortis en bas, ils reviennent en haut) : pas de bordure visible, quelle que soit la hauteur de la page.
 * Effet de perspective : au scroll, chaque couche est décalée de `parallax` x scrollY. Plus c'est
 * lointain (petit, pâle), moins le flocon suit le défilement de la page.
 * Chaque couche est dessinée en un seul tracé : peu d'appels canvas par image.
 */
const LAYERS = [
  { share: 0.5, radius: [0.7, 1.3], speed: 0.2, parallax: 0.2, color: "255, 255, 255", alpha: 0.35 },
  { share: 0.28, radius: [1.3, 2], speed: 0.45, parallax: 0.45, color: "255, 255, 255", alpha: 0.55 },
  { share: 0.14, radius: [2, 3], speed: 0.8, parallax: 0.75, color: "255, 255, 255", alpha: 0.7 },
  { share: 0.08, radius: [1.2, 2.2], speed: 0.4, parallax: 0.4, color: "255, 200, 130", alpha: 0.6 },
] as const;

const MARGIN = 10;

type Flake = { x: number; y: number; r: number; drift: number; phase: number };

const mod = (value: number, size: number) => ((value % size) + size) % size;

function Snow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let width = 0;
    let height = 0;
    let layers: Flake[][] = [];
    let frame = 0;

    const populate = () => {
      // Peu de flocons : l'effet doit rester discret, surtout sur mobile.
      const total = Math.round(Math.min(70, Math.max(24, width / 22)));
      layers = LAYERS.map((layer) =>
        Array.from({ length: Math.round(total * layer.share) }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          r: layer.radius[0] + Math.random() * (layer.radius[1] - layer.radius[0]),
          drift: 0.2 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
        })),
      );
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const widthChanged = window.innerWidth !== width;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Sur mobile la barre d'adresse fait varier la hauteur : on ne régénère que si la largeur change.
      if (widthChanged) populate();
    };

    const draw = (time: number) => {
      const scroll = window.scrollY;
      const wrapHeight = height + MARGIN * 2;
      ctx.clearRect(0, 0, width, height);

      LAYERS.forEach((layer, index) => {
        ctx.fillStyle = `rgba(${layer.color}, ${layer.alpha})`;
        ctx.beginPath();
        for (const f of layers[index]) {
          f.y += layer.speed;
          const x = f.x + Math.sin(time / 1800 + f.phase) * f.drift * 8;
          const y = mod(f.y - scroll * layer.parallax, wrapHeight) - MARGIN;
          ctx.moveTo(x + f.r, y);
          ctx.arc(x, y, f.r, 0, Math.PI * 2);
        }
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="xmas-snow" aria-hidden="true" />;
}
