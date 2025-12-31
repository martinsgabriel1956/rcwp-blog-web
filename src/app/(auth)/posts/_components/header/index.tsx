import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./_components/logout";

export function PostsHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div className="">
            <h1 className="font-display text-2xl font-bold text-foreground">
              Painel Administrativo
            </h1>
            <p className="text-sm text-muted-foreground">
              Gerencie seus posts do blog
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/posts/create" className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center  whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 has-[>svg]:px-3">
            <Plus className="h-4 w-4 mr-2" />
            Novo Post
          </Link>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
