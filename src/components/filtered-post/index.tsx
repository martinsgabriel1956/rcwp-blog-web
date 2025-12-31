import { ArrowRight, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FeaturedPostProps } from "./types";

export function FeaturedPost({
  post,
}: FeaturedPostProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-background to-coral-50/30">
      <div className="container py-12 md:py-20">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className={`badge badge-${post.category.color}`}>
                {post.category.name}
              </span>
              <span className="text-sm text-muted-foreground">
                Artigo em Destaque
              </span>
            </div>

            <Link
              href={`/posts/${post.slug}`}
              aria-label={`Ler artigo: ${post.title}`}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight cursor-pointer hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight cursor-pointer hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                {post.title}
              </h2>
            </Link>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <Link
                href={`/authors/${post.author.id}`}
                className="flex items-center gap-3 group"
              >
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-left">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {post.views.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              href={`/posts/${post.slug}`}
              aria-label={`Ler artigo: ${post.title}`}
              className="btn btn-primary group"
            >
              Ler Artigo Completo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <Image
            src={post.coverImage}
            alt={post.title}
            width={700}
            height={700}
            className="order-1 lg:order-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
          />


          {/* <div
            className="order-1 lg:order-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div> */}
        </div>
      </div>

      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
