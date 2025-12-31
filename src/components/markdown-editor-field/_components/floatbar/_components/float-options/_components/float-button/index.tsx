import { cn } from "@/lib/utils";
import type { FloatButtonProps } from "./types";

export function FloatButton({
  Icon,
  onClick,
  type = "button",
  disabled,
  isActive,
  typeOption,
}: FloatButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "flex items-center justify-start gap-3 px-3 py-2 rounded-md text-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive && "bg-accent text-accent-foreground"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="text-sm font-medium">{typeOption}</span>
    </button>
  );
}
