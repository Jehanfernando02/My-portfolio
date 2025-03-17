"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function LogoAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 300

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 80
    const particleCount = 100
    const particles: { x: number; y: number; size: number; speed: number; angle: number }[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * radius + radius * 0.5

      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        angle: angle,
      })
    }

    const drawLogo = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 2)
      gradient.addColorStop(0, "rgba(138, 43, 226, 0.6)")
      gradient.addColorStop(1, "rgba(138, 43, 226, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Draw particles
      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update particle position
        particle.angle += particle.speed / 50
        const distance = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2))

        particle.x = centerX + Math.cos(particle.angle) * distance
        particle.y = centerY + Math.sin(particle.angle) * distance
      })

      // Draw logo
      ctx.fillStyle = "#fff"
      ctx.font = "bold 40px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Σ", centerX, centerY)

      requestAnimationFrame(drawLogo)
    }

    drawLogo()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="flex justify-center items-center py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <canvas ref={canvasRef} width={300} height={300} className="mx-auto" />
      </motion.div>
    </div>
  )
}

