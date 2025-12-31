import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/format/format-date";
import { formatViews } from "@/utils/format/format-views";
import { blogPosts } from "@/utils/mockedData";
import { ShareButtons } from "./_components/share-buttons";
import type { PostPageProps } from "./types";

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Voltar aos artigos</span>
          </Link>
        </div>
      </div>

      <article className="container py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className={`badge badge-${post?.category.color}`}>
              {post?.category.name}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight animate-slide-up">
            {post?.title}
          </h1>

          <div
            className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-10 pb-8 border-b border-border animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Link
              href={`/authors/${post?.author.id}`}
              className="flex items-center gap-3 group"
            >
              <Image
                src={post?.author.avatar ?? ""}
                alt={post?.author.name ?? ""}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />

              <div className="text-left">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {post?.author.name}
                </p>
                <p className="text-xs">{post?.author.role}</p>
              </div>
            </Link>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post?.publishedAt ?? "")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post?.readTime} min de leitura</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span>{formatViews(post?.views ?? 0)} visualizações</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-xl animate-scale-in">
            <Image
              src={post?.coverImage ?? ""}
              alt={post?.title ?? ""}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <ShareButtons title={post?.title ?? ""} />

          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post!.content }}
          />

          {/* Tags */}
          {post?.tags?.length && post?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 pb-10 border-b border-border">
              {post?.tags?.map((tag) => (
                <span key={tag} className="badge badge-primary">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="bg-gradient-to-br from-teal-50 to-coral-50/30 rounded-2xl p-8 mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Image
                src={post?.author.avatar ?? ""}
                alt={post?.author.name ?? ""}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <Link
                  href={`/authors/${post?.author.id}`}
                  className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors mb-1"
                >
                  {post?.author.name}
                </Link>
                <p className="text-sm text-primary mb-3">{post?.author.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {post?.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
