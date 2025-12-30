import { Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import type { BlogCardProps } from "./types";

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <article className="group bg-card rounded-2xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`badge badge-${post.category.color} shadow-md`}>
            {post.category.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>{formatViews(post.views)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button className="flex items-center gap-3 group/author">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={36}
              height={36}
              className="w-9 h-9 rounded-full ring-2 ring-border"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground group-hover/author:text-primary transition-colors">
                {post.author.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.author.role}
              </p>
            </div>
          </Button>

          {post.tags.length > 0 && (
            <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              #{post.tags[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
