"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

export default function DataVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = svg.node()?.getBoundingClientRect().width || 1000
    const height = svg.node()?.getBoundingClientRect().height || 600

    // Clear previous visualization
    svg.selectAll("*").remove()

    // Create a group for the visualization
    const g = svg.append("g")

    // Generate random data points
    const numPoints = 100
    const points = Array.from({ length: numPoints }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 5 + 2,
      color: Math.random(),
    }))

    // Create a color scale
    const colorScale = d3.scaleLinear<string>().domain([0, 0.5, 1]).range(["#1a237e", "#00bcd4", "#ff7f50"])

    // Create connections between points
    const connections: { source: { x: number; y: number }; target: { x: number; y: number } }[] = []
    points.forEach((point, i) => {
      // Connect to 2-3 nearest points
      const numConnections = Math.floor(Math.random() * 2) + 2
      const distances = points
        .map((p, j) => ({ index: j, distance: Math.sqrt((p.x - point.x) ** 2 + (p.y - point.y) ** 2) }))
        .filter((d) => d.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, numConnections)

      distances.forEach((d) => {
        connections.push({
          source: point,
          target: points[d.index],
        })
      })
    })

    // Draw connections
    g.selectAll(".connection")
      .data(connections)
      .enter()
      .append("line")
      .attr("class", "connection")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)
      .attr("stroke", "#ffffff")
      .attr("stroke-opacity", 0.2)
      .attr("stroke-width", 1)

    // Draw points
    g.selectAll(".point")
      .data(points)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.r)
      .attr("fill", (d) => colorScale(d.color))
      .attr("opacity", 0.7)

    // Animation
    function animate() {
      // Animate points
      g.selectAll(".point")
        .data(points)
        .transition()
        .duration(3000)
        .attr("cx", (d) => {
          d.x += Math.random() * 10 - 5
          if (d.x < 0) d.x = 0
          if (d.x > width) d.x = width
          return d.x
        })
        .attr("cy", (d) => {
          d.y += Math.random() * 10 - 5
          if (d.y < 0) d.y = 0
          if (d.y > height) d.y = height
          return d.y
        })
        .attr("r", (d) => {
          d.r = Math.random() * 5 + 2
          return d.r
        })
        .attr("fill", (d) => {
          d.color = (d.color + Math.random() * 0.1) % 1
          return colorScale(d.color)
        })

      // Update connections
      g.selectAll(".connection")
        .data(connections)
        .transition()
        .duration(3000)
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)
        .attr("stroke-opacity", () => Math.random() * 0.3 + 0.1)
    }

    // Run animation every 3 seconds
    const interval = setInterval(animate, 3000)

    // Clean up
    return () => clearInterval(interval)
  }, [])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      style={{
        background: "linear-gradient(135deg, #0d1642 0%, #1a237e 100%)",
        overflow: "hidden",
      }}
    />
  )
}

