"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function LogoAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = 400 * pixelRatio;
    canvas.height = 400 * pixelRatio;
    canvas.style.width = "400px";
    canvas.style.height = "400px";
    ctx.scale(pixelRatio, pixelRatio);

    const centerX = 200;
    const centerY = 200;
    let time = 0;

    const particles: { x: number; y: number; size: number; angle: number; speed: number; hue: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: centerX,
        y: centerY,
        size: Math.random() * 4 + 2,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 3 + 1,
        hue: 200 + Math.random() * 40,
      });
    }

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, 400, 400);

      // Subtle gradient background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
      gradient.addColorStop(0, "rgba(99, 179, 237, 0.15)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 400);

      // Particles
      particles.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${1 - (time % 1)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (Math.hypot(p.x - centerX, p.y - centerY) > 180) {
          p.x = centerX;
          p.y = centerY;
          p.angle = Math.random() * Math.PI * 2;
        }
      });

      // Logo with glow
      ctx.font = "bold 60px 'Inter'";
      ctx.fillStyle = "rgba(43, 108, 176, 1)";
      ctx.shadowColor = "rgba(43, 108, 176, 0.8)";
      ctx.shadowBlur = 20;
      ctx.textAlign = "center";
      ctx.fillText("JF", centerX, centerY);
      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex justify-center items-center py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <canvas ref={canvasRef} className="relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}