"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface NavItem {
  href: string
  label: string
}

export default function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState<string>("")

  const navItems: NavItem[] = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education-certifications", label: "Education & Certifications" },
  ]

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href) as HTMLElement).filter(Boolean)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for the header

      // Find the current section
      let currentSection = ""
      sections.forEach((section) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = `#${section.id}`
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection, navItems])

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-colors ${
            activeSection === item.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

