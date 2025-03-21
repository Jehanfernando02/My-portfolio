"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function LogoAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const pixelRatio = window.devicePixelRatio || 1
    canvas.width = 400 * pixelRatio
    canvas.height = 400 * pixelRatio
    canvas.style.width = "400px"
    canvas.style.height = "400px"
    ctx.scale(pixelRatio, pixelRatio)

    const centerX = 200
    const centerY = 200
    const baseRadius = 80

    // Animation parameters
    let time = 0
    const hue = 270 // Purple hue
    let pulseSize = 0
    let rotationAngle = 0

    // Create different particle systems
    const orbitalParticles: {
      x: number
      y: number
      size: number
      speed: number
      angle: number
      orbitRadius: number
      orbitSpeed: number
      alpha: number
      hue: number
    }[] = []

    const floatingParticles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      alpha: number
      hue: number
    }[] = []

    const glowingDots: {
      angle: number
      distance: number
      size: number
      pulseSpeed: number
      pulseOffset: number
      hue: number
    }[] = []

    // Create orbital particles
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2
      const orbitRadius = Math.random() * 30 + baseRadius

      orbitalParticles.push({
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.01 + 0.005,
        angle: angle,
        orbitRadius: orbitRadius,
        orbitSpeed: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        alpha: Math.random() * 0.5 + 0.5,
        hue: hue + Math.random() * 40 - 20,
      })
    }

    // Create floating background particles
    for (let i = 0; i < 50; i++) {
      floatingParticles.push({
        x: (Math.random() * canvas.width) / pixelRatio,
        y: (Math.random() * canvas.height) / pixelRatio,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.3 + 0.1,
        hue: hue + Math.random() * 60 - 30,
      })
    }

    // Create glowing dots around the logo
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      glowingDots.push({
        angle: angle,
        distance: baseRadius * 1.5,
        size: 3,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        hue: hue + Math.random() * 30 - 15,
      })
    }

    // Function to draw a glowing text
    const drawGlowingText = (
      text: string,
      x: number,
      y: number,
      fontSize: number,
      glowSize: number,
      glowColor: string,
      textColor: string,
    ) => {
      ctx.save()

      // Draw glow
      ctx.font = `bold ${fontSize}px 'Montserrat', sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.shadowColor = glowColor
      ctx.shadowBlur = glowSize
      ctx.fillStyle = glowColor
      ctx.fillText(text, x, y)

      // Draw text
      ctx.shadowBlur = 0
      ctx.fillStyle = textColor
      ctx.fillText(text, x, y)

      ctx.restore()
    }

    // Function to create a pulsing glow effect
    const createPulsingGlow = (
      x: number,
      y: number,
      minRadius: number,
      maxRadius: number,
      color: string,
      speed: number,
    ) => {
      const radius = minRadius + ((Math.sin(time * speed) + 1) / 2) * (maxRadius - minRadius)

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, color)
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Main animation loop
    const animate = () => {
      time += 0.016 // Approximately 60fps
      rotationAngle += 0.005
      pulseSize = (Math.sin(time) + 1) / 2

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio)

      // Draw background
      ctx.fillStyle = "rgba(10, 1, 24, 0.1)"
      ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio)

      // Draw floating particles
      floatingParticles.forEach((particle) => {
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width / pixelRatio
        if (particle.x > canvas.width / pixelRatio) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height / pixelRatio
        if (particle.y > canvas.height / pixelRatio) particle.y = 0
      })

      // Create base glow
      createPulsingGlow(
        centerX,
        centerY,
        baseRadius * 0.8,
        baseRadius * 2,
        `rgba(138, 43, 226, ${0.3 + pulseSize * 0.2})`,
        0.5,
      )

      // Draw orbital particles
      orbitalParticles.forEach((particle) => {
        // Update orbit
        particle.angle += particle.orbitSpeed

        // Calculate position based on orbit and add some wobble
        const wobble = Math.sin(time * 2 + particle.angle * 3) * 5
        const currentRadius = particle.orbitRadius + wobble

        particle.x = centerX + Math.cos(particle.angle) * currentRadius
        particle.y = centerY + Math.sin(particle.angle) * currentRadius

        // Draw particle with glow
        ctx.shadowColor = `hsla(${particle.hue}, 100%, 70%, ${particle.alpha})`
        ctx.shadowBlur = 5
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * (0.8 + pulseSize * 0.4), 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw glowing dots
      glowingDots.forEach((dot) => {
        const pulseFactor = Math.sin(time * dot.pulseSpeed + dot.pulseOffset) * 0.5 + 0.5
        const x = centerX + Math.cos(dot.angle + rotationAngle) * dot.distance
        const y = centerY + Math.sin(dot.angle + rotationAngle) * dot.distance

        ctx.shadowColor = `hsla(${dot.hue}, 100%, 70%, ${0.7 + pulseFactor * 0.3})`
        ctx.shadowBlur = 10
        ctx.fillStyle = `hsla(${dot.hue}, 100%, 70%, ${0.7 + pulseFactor * 0.3})`
        ctx.beginPath()
        ctx.arc(x, y, dot.size * (1 + pulseFactor), 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connecting lines between glowing dots
      ctx.strokeStyle = `rgba(138, 43, 226, ${0.1 + pulseSize * 0.1})`
      ctx.lineWidth = 1

      for (let i = 0; i < glowingDots.length; i++) {
        const dot1 = glowingDots[i]
        const dot2 = glowingDots[(i + 1) % glowingDots.length]

        const x1 = centerX + Math.cos(dot1.angle + rotationAngle) * dot1.distance
        const y1 = centerY + Math.sin(dot1.angle + rotationAngle) * dot1.distance
        const x2 = centerX + Math.cos(dot2.angle + rotationAngle) * dot2.distance
        const y2 = centerY + Math.sin(dot2.angle + rotationAngle) * dot2.distance

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Draw inner circle
      ctx.fillStyle = `rgba(20, 5, 40, 0.7)`
      ctx.beginPath()
      ctx.arc(centerX, centerY, baseRadius * 0.7, 0, Math.PI * 2)
      ctx.fill()

      // Draw logo text with glow
      drawGlowingText(
        "JF",
        centerX,
        centerY,
        50,
        15 + pulseSize * 5,
        `rgba(138, 43, 226, ${0.7 + pulseSize * 0.3})`,
        "#ffffff",
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="flex justify-center items-center py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative"
        ref={containerRef}
      >
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />

        {/* Animated rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-purple-500/20 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-purple-500/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-purple-500/5 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Canvas for the main animation */}
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="mx-auto relative z-10"
          style={{ width: "400px", height: "400px" }}
        />

        {/* Floating particles using Framer Motion */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-400/30"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
              x: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}