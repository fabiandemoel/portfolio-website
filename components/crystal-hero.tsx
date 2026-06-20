"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function CrystalHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Create a gradient background
    const canvas = document.createElement("canvas")
    canvas.width = 2
    canvas.height = 2

    const context = canvas.getContext("2d")
    if (context) {
      // Create gradient background
      const gradient = context.createLinearGradient(0, 0, 0, 2)
      gradient.addColorStop(0, "#6610f2")
      gradient.addColorStop(1, "#e83e8c")

      context.fillStyle = gradient
      context.fillRect(0, 0, 2, 2)
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    scene.background = texture

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const pointLight1 = new THREE.PointLight(0xe83e8c, 2, 10)
    pointLight1.position.set(2, 2, 2)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x6610f2, 2, 10)
    pointLight2.position.set(-2, -2, -2)
    scene.add(pointLight2)

    // Create crystals
    const crystals: THREE.Mesh[] = []
    const createCrystal = (position: THREE.Vector3, scale: THREE.Vector3, color: number) => {
      const geometry = new THREE.IcosahedronGeometry(1, 0)
      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: 0.2,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        transmission: 0.5,
      })

      const crystal = new THREE.Mesh(geometry, material)
      crystal.position.copy(position)
      crystal.scale.copy(scale)
      crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      scene.add(crystal)
      crystals.push(crystal)
      return crystal
    }

    // Create multiple crystals
    createCrystal(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1.5, 1.5, 1.5), 0x6610f2)
    createCrystal(new THREE.Vector3(2, 1, -2), new THREE.Vector3(1, 1, 1), 0xe83e8c)
    createCrystal(new THREE.Vector3(-2, -1, -1), new THREE.Vector3(0.8, 0.8, 0.8), 0xa78bfa)
    createCrystal(new THREE.Vector3(1, -2, 1), new THREE.Vector3(0.7, 0.7, 0.7), 0x6610f2)
    createCrystal(new THREE.Vector3(-1.5, 1.5, 0.5), new THREE.Vector3(0.6, 0.6, 0.6), 0xe83e8c)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate crystals
      crystals.forEach((crystal, index) => {
        crystal.rotation.x += 0.003 * (index % 2 === 0 ? 1 : -1)
        crystal.rotation.y += 0.004 * (index % 3 === 0 ? 1 : -1)
      })

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 bg-gradient-to-br from-[#6610f2] to-[#e83e8c]" />
}

