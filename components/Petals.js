"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#FF8FA9", "#FF8FA9", "#E8648C", "#F3CB98"];

export default function Petals() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const still =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let items = [];

    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function make(initial) {
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : -30,
        s: 7 + Math.random() * 13,
        vy: 0.25 + Math.random() * 0.55,
        sway: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        heart: Math.random() < 0.35,
        a: 0.18 + Math.random() * 0.4,
        col: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    }

    function draw(p) {
      const s = p.s;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.col;
      ctx.beginPath();
      if (p.heart) {
        ctx.moveTo(0, s * 0.45);
        ctx.bezierCurveTo(-s * 1.1, -s * 0.2, -s * 0.55, -s * 0.95, 0, -s * 0.3);
        ctx.bezierCurveTo(s * 0.55, -s * 0.95, s * 1.1, -s * 0.2, 0, s * 0.45);
      } else {
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(s * 0.85, -s * 0.2, 0, s);
        ctx.quadraticCurveTo(-s * 0.85, -s * 0.2, 0, -s);
      }
      ctx.fill();
      ctx.restore();
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      items.forEach((p, i) => {
        p.sway += 0.012;
        p.x += Math.sin(p.sway) * 0.35;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > h + 30) items[i] = make(false);
        draw(p);
      });
      raf = requestAnimationFrame(frame);
    }

    size();
    items = Array.from({ length: 30 }, () => make(true));
    if (still) items.forEach(draw);
    else frame();

    window.addEventListener("resize", size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return <canvas ref={ref} className="petals" aria-hidden="true" />;
}
