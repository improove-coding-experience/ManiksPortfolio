'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroBackground3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.set(0, 0, 6.5)

    const group = new THREE.Group()
    scene.add(group)

    const geo = new THREE.TorusKnotGeometry(1.25, 0.42, 180, 24)
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#60a5fa'),
      metalness: 0.6,
      roughness: 0.25,
      emissive: new THREE.Color('#7c3aed'),
      emissiveIntensity: 0.15,
    })
    const knot = new THREE.Mesh(geo, mat)
    group.add(knot)

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.18 }),
    )
    group.add(wire)

    const key = new THREE.DirectionalLight(0xffffff, 1.1)
    key.position.set(2.5, 2.5, 5)
    scene.add(key)

    const rim = new THREE.DirectionalLight(0x7c3aed, 0.65)
    rim.position.set(-4, 1, -2)
    scene.add(rim)

    const amb = new THREE.AmbientLight(0x94a3b8, 0.55)
    scene.add(amb)

    let raf = 0
    const clock = new THREE.Clock()

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const { width, height } = parent.getBoundingClientRect()
      const w = Math.max(1, Math.floor(width))
      const h = Math.max(1, Math.floor(height))
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.22
      group.rotation.x = t * 0.12
      group.position.y = Math.sin(t * 0.7) * 0.08
      renderer.render(scene, camera)
      raf = window.requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      geo.dispose()
      mat.dispose()
      ;(wire.geometry as THREE.BufferGeometry).dispose()
      ;(wire.material as THREE.Material).dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  )
}

