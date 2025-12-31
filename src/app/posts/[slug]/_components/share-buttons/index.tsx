"use client";

import { Facebook, MessageCircle, Share2 } from "lucide-react";
import type { ShareButtonsProps } from "./types";

export function ShareButtons({ title }: ShareButtonsProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = title ?? "";

  return (
    <div className="flex items-center gap-4 mb-10 p-5 bg-muted rounded-2xl">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Share2 className="w-4 h-4" />
        <span>Compartilhar:</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Compartilhar no WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
