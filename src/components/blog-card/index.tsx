import { Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/format/format-date";
import { formatViews } from "@/utils/format/format-views";
import { Button } from "../ui/button";
import type { BlogCardProps } from "./types";

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-card rounded-2xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/posts/${post.slug}`}>
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

        <div className="p-6">
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

          <h3 className="text-xl font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button
              variant="ghost"
              className="flex items-center gap-3 group/author hover:bg-transparent cursor-pointer pl-0"
            >
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
      </Link>
    </article>
  );
}
