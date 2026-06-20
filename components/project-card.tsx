import { GitlabIcon as GitHub, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectProps {
  project: {
    title: string
    description: string
    technologies: string[]
    github?: string
    demo?: string
    image?: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="h-48 overflow-hidden bg-[#1a237e] dark:bg-gray-800 relative">
        {project.image ? (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-white opacity-30">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-[#1a237e] dark:text-[#00bcd4] font-roboto-slab">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-800 text-[#1a237e] dark:text-[#00bcd4] border-[#00bcd4]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.github && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GitHub className="h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button
            size="sm"
            className="bg-[#1a237e] hover:bg-[#0d1642] dark:bg-[#00bcd4] dark:hover:bg-[#008ba3]"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

