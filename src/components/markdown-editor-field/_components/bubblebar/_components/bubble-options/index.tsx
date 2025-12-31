import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  Link,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { BubbleButton } from "../_components/bubble-button";
import { useBubbleOptions } from "./useBubbleOptions";

export function BubbleOptions() {
  const {
    editorState,
    handleToggleBold,
    handleToggleItalic,
    handleToggleStrike,
    handleToggleLink,
    handleToggleUnderline,
    handleToggleHeading,
    handleToggleBulletList,
    handleToggleOrderedList,
    handleToggleBlockquote,
    handleToggleUndo,
    handleToggleRedo,
    handleToggleHorizontalRule,
  } = useBubbleOptions();

  if (!editorState) {
    return null;
  }

  return (
    <ToggleGroup type="multiple" className="bg-card border-input rounded-md border p-1 shadow-md">
      <BubbleButton
        Icon={Bold}
        value="bold"
        onClick={handleToggleBold}
        title="Negrito"
        isOption={editorState.isBold}
      />

      <BubbleButton
        Icon={Italic}
        onClick={handleToggleItalic}
        title="Itálico"
        value="italic"
        isOption={editorState.isItalic}
      />

      <BubbleButton
        Icon={Strikethrough}
        onClick={handleToggleStrike}
        title="Riscado"
        value="strike"
        isOption={editorState.isStrike}
      />

      <BubbleButton
        Icon={Link}
        onClick={handleToggleLink}
        title="Link"
        value="link"
        isOption={editorState.isLink}
      />

      <BubbleButton
        Icon={Underline}
        onClick={handleToggleUnderline}
        title="Sublinhado"
        value="underline"
        isOption={editorState.isUnderline}
      />

      <BubbleButton
        Icon={Heading1}
        onClick={() => handleToggleHeading(1)}
        title="Título 1"
        value="heading1"
        isOption={editorState.isHeading1}
      />

      <BubbleButton
        Icon={Heading2}
        onClick={() => handleToggleHeading(2)}
        title="Título 2"
        value="heading2"
        isOption={editorState.isHeading2}
      />

      <BubbleButton
        Icon={Heading3}
        onClick={() => handleToggleHeading(3)}
        title="Título 3"
        value="heading3"
        isOption={editorState.isHeading3}
      />

      <BubbleButton
        Icon={Heading4}
        onClick={() => handleToggleHeading(4)}
        title="Título 4"
        value="heading4"
        isOption={editorState.isHeading4}
      />

      <BubbleButton
        Icon={List}
        onClick={handleToggleBulletList}
        title="Lista não ordenada"
        value="bulletList"
        isOption={editorState.isBulletList}
      />

      <BubbleButton
        Icon={ListOrdered}
        onClick={handleToggleOrderedList}
        title="Lista ordenada"
        value="orderedList"
        isOption={editorState.isOrderedList}
      />

      <BubbleButton
        Icon={Quote}
        onClick={handleToggleBlockquote}
        title="Citação"
        value="blockquote"
        isOption={editorState.isBlockquote}
      />

      <BubbleButton
        Icon={Minus}
        onClick={handleToggleHorizontalRule}
        title="Regra horizontal"
        value="horizontalRule"
      />

      <BubbleButton
        Icon={Undo2}
        onClick={handleToggleUndo}
        title="Desfazer"
        value="undo"
      />

      <BubbleButton
        Icon={Redo2}
        onClick={handleToggleRedo}
        title="Refazer"
        value="redo"
      />
    </ToggleGroup>
  );
}
