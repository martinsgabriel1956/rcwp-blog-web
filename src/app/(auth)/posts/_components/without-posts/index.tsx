import { FileText } from "lucide-react";

export function WithoutPosts() {
  return (
    <div className="text-center py-16">
      <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-foreground mb-2">
        Nenhum post ainda
      </h2>
      <p className="text-muted-foreground mb-6">
        Comece criando seu primeiro post
      </p>
    </div>
  )
}
