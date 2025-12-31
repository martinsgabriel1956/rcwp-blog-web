"use client";

import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function CreatePostHeaderActionButtons() {
  const [isPublished, setIsPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Switch
          id="publish"
          checked={isPublished}
          onCheckedChange={setIsPublished}
        />
        <Label htmlFor="publish" className="text-sm">
          {isPublished ? "Publicado" : "Rascunho"}
        </Label>
      </div>
      <Button onClick={() => { }} disabled={saving}>
        {saving ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </>
        )}
      </Button>
    </div>
  );
}
