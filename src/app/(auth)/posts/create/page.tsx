import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CreatePostForm } from "./_components/create-post-form";
import { CreatePostHeaderActionButtons } from "./_components/create-post-header-action-buttons";

export default function CreatePostPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/posts"
              className="hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">
                Novo Post
              </h1>
              <p className="text-sm text-muted-foreground">
                Crie um novo artigo para o blog
              </p>
            </div>
          </div>
          <CreatePostHeaderActionButtons />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <CreatePostForm />
      </main>
    </div>
  );
}
