import { Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPostProps {
  post: {
    title: string
    summary: string
    date: string
    readTime: string
    tags: string[]
    url: string
  }
}

export default function BlogCard({ post }: BlogPostProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-[#1a237e] dark:text-[#00bcd4] font-roboto-slab">{post.title}</CardTitle>
          <Badge className="bg-[#ff7f50] hover:bg-[#ff6a3c]">{post.date}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-800 text-[#1a237e] dark:text-[#00bcd4] border-[#00bcd4]"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{post.readTime} min read</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#1a237e] hover:bg-[#0d1642] dark:bg-[#00bcd4] dark:hover:bg-[#008ba3]" asChild>
          <a href={post.url}>Read Article</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

