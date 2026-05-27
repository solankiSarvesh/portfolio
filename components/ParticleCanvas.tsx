"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  alpha: number;
  alphaSpeed: number;
  colorType: "green" | "cyan" | "white";
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Muted premium star configurations
    const numStars = 70;
    const stars: Star[] = [];

    // Initialize stars with custom emerald, teal, and soft white colors
    for (let i = 0; i < numStars; i++) {
      const rand = Math.random();
      const colorType = rand < 0.35 ? "green" : rand < 0.7 ? "cyan" : "white";
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        alpha: Math.random(),
        alphaSpeed: 0.003 + Math.random() * 0.004,
        colorType,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Draw Loop
    const draw = () => {
      // 1. Draw rich gradient Midnight Steel background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, "#0b1222"); // Deep Slate Blue
      bgGrad.addColorStop(0.6, "#080d18"); // Midnight Steel
      bgGrad.addColorStop(1, "#04070e"); // Obsidian Navy
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const time = Date.now();

      // 2. High-end Shifted Plasma Glow Orbs (Swirling court lighting)
      const orb1X = centerX + Math.cos(time * 0.0002) * (width * 0.26);
      const orb1Y = centerY + Math.sin(time * 0.0003) * (height * 0.22);
      
      const orb2X = centerX + Math.sin(time * 0.00015) * (width * 0.28);
      const orb2Y = centerY + Math.cos(time * 0.0002) * (height * 0.26);

      // Draw Swirling Emerald Orb
      ctx.beginPath();
      const orb1Grad = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, Math.min(width, height) * 0.65);
      orb1Grad.addColorStop(0, "rgba(16, 185, 129, 0.035)"); // Kinetic Emerald
      orb1Grad.addColorStop(0.5, "rgba(16, 185, 129, 0.01)");
      orb1Grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = orb1Grad;
      ctx.fillRect(0, 0, width, height);

      // Draw Swirling Teal Orb
      ctx.beginPath();
      const orb2Grad = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, Math.min(width, height) * 0.65);
      orb2Grad.addColorStop(0, "rgba(6, 182, 212, 0.035)"); // Scientific Teal
      orb2Grad.addColorStop(0.5, "rgba(6, 182, 212, 0.01)");
      orb2Grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = orb2Grad;
      ctx.fillRect(0, 0, width, height);

      // 3. Muted grid overlays (Soft Emerald/Teal lines)
      ctx.strokeStyle = "rgba(16, 185, 129, 0.012)";
      ctx.lineWidth = 1;
      const gridSpacing = 120;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 4. Draw drifting kinetic particles
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        // Slower, smooth kinetic drift
        star.z -= 0.2;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        // Project coordinate
        const k = 85.0 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        // Twinkle transitions
        star.alpha += star.alphaSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.05) {
          star.alphaSpeed = -star.alphaSpeed;
        }

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0.1, (1 - star.z / width) * 1.8);
          
          let fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.12})`;
          if (star.colorType === "green") {
            fillStyle = `rgba(16, 185, 129, ${star.alpha * 0.25})`; // Kinetic Emerald
          } else if (star.colorType === "cyan") {
            fillStyle = `rgba(6, 182, 212, ${star.alpha * 0.25})`; // Scientific Teal
          }

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = fillStyle;
          ctx.fill();
        }
      }

      // 5. Interactive spotlight following mouse
      if (mouseRef.current.active) {
        ctx.beginPath();
        const radGrd = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          450
        );
        radGrd.addColorStop(0, "rgba(16, 185, 129, 0.02)"); 
        radGrd.addColorStop(0.5, "rgba(6, 182, 212, 0.008)"); 
        radGrd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = radGrd;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-[#080d18]"
    />
  );
}
