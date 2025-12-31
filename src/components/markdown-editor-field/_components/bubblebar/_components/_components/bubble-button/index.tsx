import { ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { BubbleButtonsProps } from "./types";

export function BubbleButton({
  Icon,
  onClick,
  title,
  isOption,
  value,
}: BubbleButtonsProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem
          value={value}
          aria-label={`Habilitar ${title}`}
          onClick={onClick}
          variant="outline"
          data-state={isOption ? "on" : "off"}
        >
          <Icon className="size-4" />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
