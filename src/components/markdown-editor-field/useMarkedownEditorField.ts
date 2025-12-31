import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Typography from "@tiptap/extension-typography";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { marked } from "marked";
import { useEffect, useMemo } from "react";
import type { MarkdownEditorFieldProps } from "./types";

export function useMarkdownEditorField({
	value,
	onChange,
	disabled = false,
}: MarkdownEditorFieldProps) {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Image,
			Typography,
			Link.configure({
				openOnClick: true,
				autolink: true,
				protocols: ["http", "https", "mailto"],
				validate: (href) => /^https?:\/\//.test(href),
			}),
		],
		content: value || "",
		immediatelyRender: false,
		editable: !disabled,

		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			onChange?.(html);
		},

		editorProps: {
			attributes: {
				class:
					"prose max-w-none focus:outline-none min-h-[500px] p-3 border-input rounded-md border bg-transparent transition-colors focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
			},
			handlePaste: (_, event) => {
				const clipboard = event.clipboardData;

				const files = clipboard?.files;
				if (files?.length) {
					event.preventDefault();
					Array.from(files).forEach((file) => {
						const reader = new FileReader();
						reader.onload = () => {
							editor?.commands.setImage({ src: reader.result as string });
						};
						reader.readAsDataURL(file);
					});
					return true;
				}

				// Texto (URL ou Markdown)
				const text = clipboard?.getData("text/plain");
				if (text) {
					event.preventDefault();

					if (text.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)) {
						editor?.commands.setImage({ src: text });
					} else {
						const html = marked.parse(text);
						editor?.commands.insertContent(html);
					}

					return true;
				}

				return false;
			},
		},
	});

	useEffect(() => {
		if (editor && value !== undefined && editor.getHTML() !== value) {
			editor.commands.setContent(value);
		}
	}, [editor, value]);

	const providerValue = useMemo(
		() => ({
			editor,
		}),
		[editor],
	);

	return {
		providerValue,
		editor,
	};
}
