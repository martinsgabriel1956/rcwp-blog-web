import { BubbleMenu } from "@tiptap/react/menus";
import { BubbleOptions } from "./_components/bubble-options";
import type { MenuFloatBarProps } from "./types";

export function BubbleBar({ editor }: MenuFloatBarProps) {
  return (
    <BubbleMenu editor={editor} options={{ placement: "bottom", offset: 8 }}>
      <BubbleOptions />
    </BubbleMenu>
  );
}
