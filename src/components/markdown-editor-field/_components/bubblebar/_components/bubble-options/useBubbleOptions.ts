import { useCurrentEditor, useEditorState } from "@tiptap/react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export function useBubbleOptions() {
  const { editor } = useCurrentEditor();
  const editorState = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor?.isActive("bold") ?? false,
      canBold: editor?.can().chain().toggleBold().run() ?? false,
      isItalic: editor?.isActive("italic") ?? false,
      canItalic: editor?.can().chain().toggleItalic().run() ?? false,
      isStrike: editor?.isActive("strike") ?? false,
      canStrike: editor?.can().chain().toggleStrike().run() ?? false,
      isLink: editor?.isActive("link") ?? false,
      canLink: editor?.can().chain().toggleLink().run() ?? false,
      isUnderline: editor?.isActive("underline") ?? false,
      canUnderline: editor?.can().chain().toggleUnderline().run() ?? false,
      isParagraph: editor?.isActive("paragraph") ?? false,
      isHeading1: editor?.isActive("heading", { level: 1 }) ?? false,
      isHeading2: editor?.isActive("heading", { level: 2 }) ?? false,
      isHeading3: editor?.isActive("heading", { level: 3 }) ?? false,
      isHeading4: editor?.isActive("heading", { level: 4 }) ?? false,
      isBulletList: editor?.isActive("bulletList") ?? false,
      isOrderedList: editor?.isActive("orderedList") ?? false,
      isBlockquote: editor?.isActive("blockquote") ?? false,
      canUndo: editor?.can().chain().undo().run() ?? false,
      canRedo: editor?.can().chain().redo().run() ?? false,
    }),
  });

  const handleToggleBold = () => editor?.chain().focus().toggleBold().run();
  const handleToggleItalic = () => editor?.chain().focus().toggleItalic().run();
  const handleToggleStrike = () => editor?.chain().focus().toggleStrike().run();
  const handleToggleLink = () => editor?.chain().focus().toggleLink().run();
  const handleToggleUnderline = () =>
    editor?.chain().focus().toggleUnderline().run();
  const handleToggleHeading = (level: number) =>
    editor
      ?.chain()
      .focus()
      .toggleHeading({ level: level as Level })
      .run();
  const handleToggleBulletList = () =>
    editor?.chain().focus().toggleBulletList().run();
  const handleToggleOrderedList = () =>
    editor?.chain().focus().toggleOrderedList().run();
  const handleToggleBlockquote = () =>
    editor?.chain().focus().toggleBlockquote().run();
  const handleToggleUndo = () => editor?.chain().focus().undo().run();
  const handleToggleRedo = () => editor?.chain().focus().redo().run();
  const handleToggleHorizontalRule = () =>
    editor?.chain().focus().setHorizontalRule().run();

  return {
    editor,
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
  };
}
