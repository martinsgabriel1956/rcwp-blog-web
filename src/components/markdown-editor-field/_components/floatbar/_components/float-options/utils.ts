export const placeholders = {
  bold: "Digite seu texto em negrito aqui...",
  italic: "Digite seu texto em itálico aqui...",
  strike: "Digite seu texto riscado aqui...",
  link: "Digite o texto do link aqui...",
  underline: "Digite seu texto sublinhado aqui...",
  heading1: "Título Principal",
  heading2: "Título Secundário",
  heading3: "Título Terciário",
  heading4: "Título Quaternário",
  bulletList: "Digite o primeiro item da lista...",
  orderedList: "Digite o primeiro item numerado...",
  blockquote: "Digite sua citação aqui..."
};


export const isPlaceholderText = (text: string) => {
    return Object.values(placeholders).includes(text);
  };
