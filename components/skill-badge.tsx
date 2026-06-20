"use client"

import { CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SkillBadgeProps {
  name: string
  certified?: boolean
  certificationInfo?: string
}

export default function SkillBadge({ name, certified = false, certificationInfo }: SkillBadgeProps) {
  if (certified && certificationInfo) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer">
              {name}
              <CheckCircle className="ml-1 h-3 w-3 text-green-300" />
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="max-w-xs bg-primary/90 text-primary-foreground border-primary/20 p-3 rounded-lg shadow-lg"
          >
            <div className="space-y-1">
              <p className="font-medium">{name} Certification</p>
              <p className="text-xs opacity-90">{certificationInfo}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
      {name}
    </div>
  )
}

