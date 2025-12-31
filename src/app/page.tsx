import { BlogCard } from "@/components/blog-card";
import { FeaturedPost } from "@/components/filtered-post";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";
import { blogPosts } from "@/utils/mockedData";

export default function HomePage() {
  const paginatedPosts = blogPosts.slice(1);

  return (
    <main>
      <Header />
      {blogPosts.length > 0 && (
        <FeaturedPost
          post={blogPosts[0]}
        />
      )}
      <div className="container py-8">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
          Últimos Artigos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
      <Newsletter />
    </main>
  );
}
