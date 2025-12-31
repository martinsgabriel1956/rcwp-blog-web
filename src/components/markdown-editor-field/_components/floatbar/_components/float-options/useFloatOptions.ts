import { useCurrentEditor, useEditorState } from "@tiptap/react";
import { isPlaceholderText, placeholders } from "./utils";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export function useFloatOptions() {
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

  const executeWithSlashRemovalAndPlaceholder = (
    action: () => void,
    placeholder: string,
    isActive: boolean,
  ) => {
    if (!editor) return;

    const { state } = editor;
    const { $from } = state.selection;
    const currentLineText = $from.nodeBefore?.textContent;
    const currentContent = editor.state.doc.textContent;

    if (currentLineText === "/") {
      editor
        .chain()
        .focus()
        .deleteRange({
          from: $from.pos - 1,
          to: $from.pos,
        })
        .run();
    }

    if (isActive && isPlaceholderText(currentContent.trim())) {
      editor.chain().focus().selectAll().deleteSelection().run();
    }

    action();

    setTimeout(() => {
      if (
        editor &&
        !isActive &&
        placeholder &&
        !editor.state.doc.textContent.trim()
      ) {
        editor.chain().focus().insertContent(placeholder).run();
        editor
          .chain()
          .focus()
          .setTextSelection({
            from: 1,
            to: placeholder.length + 1,
          })
          .run();
      }
    }, 10);
  };

  const createFormatHandler = (
    action: () => void,
    placeholderKey: keyof typeof placeholders | "",
    isActive: boolean,
  ) => {
    return () =>
      executeWithSlashRemovalAndPlaceholder(
        action,
        placeholderKey ? placeholders[placeholderKey] : "",
        isActive,
      );
  };

  const handleToggleBold = createFormatHandler(
    () => editor?.chain().focus().toggleBold().run(),
    "bold",
    editorState?.isBold || false,
  );

  const handleToggleItalic = createFormatHandler(
    () => editor?.chain().focus().toggleItalic().run(),
    "italic",
    editorState?.isItalic || false,
  );

  const handleToggleStrike = createFormatHandler(
    () => editor?.chain().focus().toggleStrike().run(),
    "strike",
    editorState?.isStrike || false,
  );

  const handleToggleLink = createFormatHandler(
    () => editor?.chain().focus().toggleLink().run(),
    "link",
    editorState?.isLink || false,
  );

  const handleToggleUnderline = createFormatHandler(
    () => editor?.chain().focus().toggleUnderline().run(),
    "underline",
    editorState?.isUnderline || false,
  );

  const handleToggleBulletList = createFormatHandler(
    () => editor?.chain().focus().toggleBulletList().run(),
    "bulletList",
    editorState?.isBulletList || false,
  );

  const handleToggleOrderedList = createFormatHandler(
    () => editor?.chain().focus().toggleOrderedList().run(),
    "orderedList",
    editorState?.isOrderedList || false,
  );

  const handleToggleBlockquote = createFormatHandler(
    () => editor?.chain().focus().toggleBlockquote().run(),
    "blockquote",
    editorState?.isBlockquote || false,
  );

  const handleToggleUndo = createFormatHandler(
    () => editor?.chain().focus().undo().run(),
    "",
    false,
  );

  const handleToggleRedo = createFormatHandler(
    () => editor?.chain().focus().redo().run(),
    "",
    false,
  );

  const handleToggleHorizontalRule = createFormatHandler(
    () => editor?.chain().focus().setHorizontalRule().run(),
    "",
    false,
  );

  function handleToggleHeading(level: number) {
    const placeholderKey = `heading${level}` as keyof typeof placeholders;
    const isActive =
      level === 1
        ? editorState?.isHeading1
        : level === 2
          ? editorState?.isHeading2
          : level === 3
            ? editorState?.isHeading3
            : level === 4
              ? editorState?.isHeading4
              : false;

    return createFormatHandler(
      () =>
        editor
          ?.chain()
          .focus()
          .toggleHeading({ level: level as Level })
          .run(),
      placeholderKey,
      isActive || false,
    )();
  }

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
