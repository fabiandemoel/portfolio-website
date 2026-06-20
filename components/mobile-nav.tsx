"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

interface NavItem {
  href: string
  label: string
}

export default function MobileNav() {
  const [open, setOpen] = useState(false)
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
      const scrollPosition = window.scrollY + 100

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

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection, navItems])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2 py-1 rounded-md transition-colors ${
                activeSection === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

