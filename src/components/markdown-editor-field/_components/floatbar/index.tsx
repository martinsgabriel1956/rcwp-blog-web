import { FloatingMenu } from "@tiptap/react/menus";
import { FloatOptions } from "./_components/float-options";
import type { FloatBarProps } from "./types";

export function FloatBar({ editor }: FloatBarProps) {
  return (
    <FloatingMenu
      editor={editor}
      shouldShow={({ state }) => {
        const { $from } = state.selection;
        const currentLineText = $from.nodeBefore?.textContent;
        return currentLineText === "/";
      }}
    >
      <FloatOptions />
    </FloatingMenu>
  );
}
