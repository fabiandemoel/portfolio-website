import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CertificationCardProps {
  name: string
  awardDate?: string
  expiryDate?: string
  skills?: string
  certificateUrl?: string
}

export default function CertificationCard({
  name,
  awardDate,
  expiryDate,
  skills,
  certificateUrl,
}: CertificationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-primary shrink-0" />
          <span className="font-medium">{name}</span>
        </div>

        {awardDate && (
          <div className="text-sm text-muted-foreground">
            Awarded: {awardDate}
            {expiryDate && `, Expires: ${expiryDate}`}
          </div>
        )}

        {skills && (
          <div className="text-sm">
            <span className="font-medium">Skills:</span> {skills}
          </div>
        )}

        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center"
          >
            View Certificate <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        )}
      </CardContent>
    </Card>
  )
}

