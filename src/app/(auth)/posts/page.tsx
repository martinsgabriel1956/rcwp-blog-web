import { Calendar } from "lucide-react";
import { Activity } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/utils/mockedData";
import ActionButtons from "./_components/action-buttons";
import { PostsHeader } from "./_components/header";
import { WithoutPosts } from "./_components/without-posts";

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PostsHeader />

      <main className="container mx-auto px-4 py-8">
        <Activity mode={blogPosts.length === 0 ? "visible" : "hidden"}>
          <WithoutPosts />
        </Activity>
        <Activity mode={blogPosts.length > 0 ? "visible" : "hidden"}>
          <div className="space-y-4">
            {blogPosts.map(
              (post) =>
              (
                <div
                  key={post.id}
                  className={cn("bg-card rounded-xl border p-6 transition-all hover:shadow-md border-border", {
                    "opacity-60 border-destructive/30": !post.is_active
                  })}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground truncate">
                          {post.title}
                        </h3>
                        <Badge
                          variant={post.is_published ? "default" : "secondary"}
                        >
                          {post.is_published ? "Publicado" : "Rascunho"}
                        </Badge>
                        {!post.is_active && (
                          <Badge variant="destructive">Inativo</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {post.excerpt || "Sem resumo"}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString("pt-BR")}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {post.category.name}
                        </Badge>
                      </div>
                    </div>
                    <ActionButtons isPublished={post.is_published} />
                  </div>
                </div>
              ),
            )}
          </div>
        </Activity>
      </main>

      {/* <DeletePostModal
        post={deletePost}
        onClose={() => setDeletePost(null)}
        onConfirm={handleDeleteConfirm}
      /> */}
    </main >
  );
}
