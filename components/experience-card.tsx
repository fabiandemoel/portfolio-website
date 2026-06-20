import { Building, Calendar, ArrowRight } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  responsibilities: string[]
  isLast?: boolean
}

export default function ExperienceCard({
  title,
  company,
  period,
  responsibilities,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <div className="timeline-item relative pl-10 pb-10">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
        <div className="w-3 h-3 rounded-full bg-background"></div>
      </div>

      {!isLast && <div className="absolute left-3 top-6 bottom-0 w-[1px] bg-primary/30"></div>}

      {/* Content */}
      <div className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-all p-5 ml-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2 border-b pb-3">
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Building size={16} className="text-primary" />
                <p className="font-medium">{company}</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar size={14} className="text-primary" />
                <p>{period}</p>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <ul className="list-none pl-0 space-y-3">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2 group">
                  <ArrowRight
                    size={16}
                    className="mt-1 text-primary shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="group-hover:text-primary/90 transition-colors">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

