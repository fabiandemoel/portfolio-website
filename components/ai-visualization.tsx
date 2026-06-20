"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function AIVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x121212)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0, 10)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
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

    // Create nodes and connections for RAG visualization
    const nodes: THREE.Mesh[] = []
    const connections: THREE.Line[] = []

    // Node positions
    const nodePositions = [
      { name: "Query", position: new THREE.Vector3(-6, 0, 0), color: 0x6610f2 },
      { name: "Vector DB", position: new THREE.Vector3(-3, 3, 0), color: 0xa78bfa },
      { name: "Knowledge Base", position: new THREE.Vector3(-3, -3, 0), color: 0xe83e8c },
      { name: "Context", position: new THREE.Vector3(0, 0, 0), color: 0xa78bfa },
      { name: "LLM", position: new THREE.Vector3(3, 0, 0), color: 0x6610f2 },
      { name: "Response", position: new THREE.Vector3(6, 0, 0), color: 0xe83e8c },
    ]

    // Create nodes
    nodePositions.forEach((node) => {
      const geometry = new THREE.SphereGeometry(0.8, 32, 32)
      const material = new THREE.MeshPhysicalMaterial({
        color: node.color,
        metalness: 0.2,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.copy(node.position)
      scene.add(mesh)
      nodes.push(mesh)

      // Add text label
      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 128
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#ffffff"
        context.font = "Bold 24px Arial"
        context.textAlign = "center"
        context.fillText(node.name, 128, 64)

        const texture = new THREE.CanvasTexture(canvas)
        const labelMaterial = new THREE.SpriteMaterial({ map: texture })
        const label = new THREE.Sprite(labelMaterial)
        label.position.copy(node.position)
        label.position.y -= 1.5
        label.scale.set(2, 1, 1)
        scene.add(label)
      }
    })

    // Create connections
    const connectionPairs = [
      [0, 1], // Query to Vector DB
      [1, 3], // Vector DB to Context
      [2, 3], // Knowledge Base to Context
      [0, 4], // Query to LLM
      [3, 4], // Context to LLM
      [4, 5], // LLM to Response
    ]

    connectionPairs.forEach(([fromIdx, toIdx]) => {
      const from = nodePositions[fromIdx].position
      const to = nodePositions[toIdx].position

      const points = []
      points.push(from)

      // Create curved line
      if (fromIdx === 0 && toIdx === 4) {
        // Special curve for Query to LLM (going below)
        const control = new THREE.Vector3((from.x + to.x) / 2, -2, 0)

        for (let i = 0; i <= 20; i++) {
          const t = i / 20
          const point = new THREE.Vector3()

          // Quadratic Bezier curve
          point.x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * control.x + t * t * to.x
          point.y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * control.y + t * t * to.y
          point.z = 0

          points.push(point)
        }
      } else {
        // Regular curve
        const control = new THREE.Vector3((from.x + to.x) / 2, (from.y + to.y) / 2 + 1, 0)

        for (let i = 0; i <= 20; i++) {
          const t = i / 20
          const point = new THREE.Vector3()

          // Quadratic Bezier curve
          point.x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * control.x + t * t * to.x
          point.y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * control.y + t * t * to.y
          point.z = 0

          points.push(point)
        }
      }

      points.push(to)

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: 0xa78bfa,
        linewidth: 2,
      })

      const line = new THREE.Line(geometry, material)
      scene.add(line)
      connections.push(line)
    })

    // Create data particles flowing through connections
    const createDataParticle = (connectionIndex: number) => {
      const connection = connections[connectionIndex]
      const positions = connection.geometry.attributes.position.array

      const geometry = new THREE.SphereGeometry(0.15, 16, 16)
      const material = new THREE.MeshBasicMaterial({
        color: 0xe83e8c,
        transparent: true,
        opacity: 0.8,
      })

      const particle = new THREE.Mesh(geometry, material)

      // Start at the beginning of the connection
      particle.position.set(positions[0], positions[1], positions[2])

      scene.add(particle)

      // Animation properties
      const totalPoints = positions.length / 3
      let currentPoint = 0
      const animationSpeed = 0.05

      // Animation function
      const animateParticle = () => {
        currentPoint += animationSpeed

        if (currentPoint >= totalPoints - 1) {
          scene.remove(particle)
          particle.geometry.dispose()
          particle.material.dispose()

          // Create a new particle after a delay
          setTimeout(
            () => {
              createDataParticle(connectionIndex)
            },
            Math.random() * 5000 + 2000,
          )

          return
        }

        const index = Math.floor(currentPoint) * 3
        particle.position.set(positions[index], positions[index + 1], positions[index + 2])

        requestAnimationFrame(animateParticle)
      }

      // Start animation after a random delay
      setTimeout(animateParticle, Math.random() * 2000)
    }

    // Create initial particles with delays
    connectionPairs.forEach((_, index) => {
      setTimeout(() => {
        createDataParticle(index)
      }, index * 1000)
    })

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Pulse effect for nodes
      nodes.forEach((node, index) => {
        const scale = 1 + 0.05 * Math.sin(Date.now() * 0.001 + index)
        node.scale.set(scale, scale, scale)
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
      renderer.setSize(containerRef.current.clientWidth / containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose of resources
      nodes.forEach((node) => {
        node.geometry.dispose()
        if (node.material instanceof THREE.Material) {
          node.material.dispose()
        } else if (Array.isArray(node.material)) {
          node.material.forEach((material) => material.dispose())
        }
      })

      connections.forEach((connection) => {
        connection.geometry.dispose()
        if (connection.material instanceof THREE.Material) {
          connection.material.dispose()
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

