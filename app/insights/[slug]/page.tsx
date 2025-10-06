import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon } from "lucide-react"
import type { Metadata } from "next"

// Generate static params for all articles
export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), "content", "insights")
  
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(articlesDirectory)
  const articles = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(articlesDirectory, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        slug: data.slug || filename.replace(".md", ""),
      }
    })

  return articles
}

// Get article data
async function getArticle(slug: string) {
  const articlesDirectory = path.join(process.cwd(), "content", "insights")
  const filenames = fs.readdirSync(articlesDirectory)
  
  for (const filename of filenames) {
    if (filename.endsWith(".md")) {
      const filePath = path.join(articlesDirectory, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)
      
      if (data.slug === slug || filename.replace(".md", "") === slug) {
        return { data, content }
      }
    }
  }
  
  return null
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug)
  
  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.data.title,
    description: article.data.excerpt,
    openGraph: {
      title: article.data.title,
      description: article.data.excerpt,
      type: "article",
      publishedTime: article.data.date,
    },
  }
}

// Convert markdown content to HTML (simplified)
function parseMarkdown(content: string) {
  // Simple markdown parsing - you can enhance this later
  return content
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mb-6">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-white mb-4 mt-8">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-white mb-3 mt-6">$1</h3>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-photon-300">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em class="text-photon-200">$1</em>')
    .replace(/^- (.*$)/gim, '<li class="text-photon-200 mb-2">• $1</li>')
    .replace(/\n\n/gim, '</p><p class="text-photon-200 mb-4">')
    .replace(/^(?!<[h|l])/gim, '<p class="text-photon-200 mb-4">')
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  const { data, content } = article
  const htmlContent = parseMarkdown(content)

  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)]">
      {/* Back Button */}
      <div className="container px-4 md:px-6 py-8">
        <Link 
          href="/insights"
          className="inline-flex items-center gap-2 text-photon-400 hover:text-photon-300 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Insights
        </Link>
      </div>

      {/* Article Header */}
      <section className="w-full py-12 md:py-16 bg-photon-gradient-hero text-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-photon-700/20 text-photon-300 text-sm rounded-full border border-photon-700/30">
              {data.category}
            </span>
            {data.featured && (
              <span className="px-3 py-1 bg-photon-500/20 text-photon-200 text-sm rounded-full border border-photon-500/30">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight mb-6">
            {data.title}
          </h1>
          
          <p className="text-lg md:text-xl text-photon-100 max-w-3xl mb-8">
            {data.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-photon-300">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span>{data.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{new Date(data.date).toLocaleDateString()}</span>
            </div>
          </div>
          
          {data.tags && (
            <div className="flex items-center gap-2 mt-6">
              <TagIcon className="w-4 h-4 text-photon-400" />
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-1 bg-photon-800/50 text-photon-300 text-xs rounded border border-photon-700/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-12 md:py-16 bg-photon-950">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>
    </div>
  )
}




