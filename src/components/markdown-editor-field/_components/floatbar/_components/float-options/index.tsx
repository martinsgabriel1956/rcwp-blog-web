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
import { FloatButton } from "./_components/float-button";
import { useFloatOptions } from "./useFloatOptions";

export function FloatOptions() {
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
  } = useFloatOptions();

  return (
    <div className="border-input bg-card rounded-md border p-2 shadow-md flex flex-col gap-1 max-h-[400px] overflow-y-auto">
      <FloatButton
        Icon={Bold}
        onClick={handleToggleBold}
        disabled={!editorState?.canBold}
        isActive={editorState?.isBold}
        typeOption="Negrito"
      />
      <FloatButton
        Icon={Italic}
        onClick={handleToggleItalic}
        disabled={!editorState?.canItalic}
        isActive={editorState?.isItalic}
        typeOption="Itálico"
      />

      <FloatButton
        Icon={Strikethrough}
        onClick={handleToggleStrike}
        disabled={!editorState?.canStrike}
        isActive={editorState?.isStrike}
        typeOption="Riscado"
      />

      <FloatButton
        Icon={Link}
        onClick={handleToggleLink}
        disabled={!editorState?.canLink}
        isActive={editorState?.isLink}
        typeOption="Link"
      />

      <FloatButton
        Icon={Underline}
        onClick={handleToggleUnderline}
        disabled={!editorState?.canUnderline}
        isActive={editorState?.isUnderline}
        typeOption="Sublinhado"
      />

      <FloatButton
        Icon={Heading1}
        onClick={() => handleToggleHeading(1)}
        isActive={editorState?.isHeading1}
        typeOption="Título 1"
      />
      <FloatButton
        Icon={Heading2}
        onClick={() => handleToggleHeading(2)}
        isActive={editorState?.isHeading2}
        typeOption="Título 2"
      />
      <FloatButton
        Icon={Heading3}
        onClick={() => handleToggleHeading(3)}
        isActive={editorState?.isHeading3}
        typeOption="Título 3"
      />
      <FloatButton
        Icon={Heading4}
        onClick={() => handleToggleHeading(4)}
        isActive={editorState?.isHeading4}
        typeOption="Título 4"
      />
      <FloatButton
        Icon={List}
        onClick={handleToggleBulletList}
        isActive={editorState?.isBulletList}
        typeOption="Lista não ordenada"
      />
      <FloatButton
        Icon={ListOrdered}
        onClick={handleToggleOrderedList}
        isActive={editorState?.isOrderedList}
        typeOption="Lista ordenada"
      />
      <FloatButton
        Icon={Quote}
        onClick={handleToggleBlockquote}
        isActive={editorState?.isBlockquote}
        typeOption="Bloco de citação"
      />
      <FloatButton
        Icon={Minus}
        onClick={handleToggleHorizontalRule}
        typeOption="Linha horizontal"
      />
      <FloatButton
        Icon={Undo2}
        onClick={handleToggleUndo}
        disabled={!editorState?.canUndo}
        typeOption="Desfazer"
      />
      <FloatButton
        Icon={Redo2}
        onClick={handleToggleRedo}
        disabled={!editorState?.canRedo}
        typeOption="Refazer"
      />
    </div>
  );
}
