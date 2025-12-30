import type { Author, BlogPost, Category } from "../components/filtered-post/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Reabilitação",
    slug: "reabilitacao",
    description: "Técnicas e exercícios de reabilitação física",
    color: "primary",
  },
  {
    id: "2",
    name: "Wellness",
    slug: "wellness",
    description: "Dicas de bem-estar e saúde holística",
    color: "secondary",
  },
  {
    id: "3",
    name: "Prevenção",
    slug: "prevencao",
    description: "Como prevenir lesões e manter a saúde",
    color: "accent",
  },
  {
    id: "4",
    name: "Dor & Alívio",
    slug: "dor-alivio",
    description: "Tratamento e manejo da dor",
    color: "info",
  },
  {
    id: "5",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Estilo de vida saudável e ativo",
    color: "warning",
  },
];

// Professional author - Blog owner
export const professionalAuthor: Author = {
  id: "1",
  name: "Dr. Sarah Mitchell",
  avatar:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  bio: "Fisioterapeuta especializada em reabilitação holística e wellness com mais de 10 anos de experiência. Fundadora do Revival Core Wellness Physiotherapy, dedicada a ajudar pacientes a recuperar sua vitalidade e alcançar bem-estar completo através de técnicas inovadoras e atendimento personalizado.",
  role: "Fisioterapeuta & Fundadora",
};

export const authors: Author[] = [professionalAuthor];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Dor nas Costas: Causas Comuns e Como a Fisioterapia Pode Ajudar",
    slug: "dor-nas-costas-causas-e-tratamento",
    excerpt:
      "Descubra as principais causas de dor nas costas e como a fisioterapia oferece soluções eficazes para seu tratamento e prevenção.",
    content: `
      <h2>Introdução</h2>
      <p>A dor nas costas é uma das queixas mais comuns nos consultórios de fisioterapia. Estima-se que 80% da população mundial terá pelo menos um episódio de dor lombar ao longo da vida.</p>

      <h2>Causas Principais</h2>
      <p>As causas mais frequentes incluem:</p>
      <ul>
        <li><strong>Má postura:</strong> Especialmente em trabalhos sedentários</li>
        <li><strong>Sobrecarga muscular:</strong> Movimentos repetitivos ou esforço excessivo</li>
        <li><strong>Hérnia de disco:</strong> Quando o disco intervertebral se desloca</li>
        <li><strong>Artrose:</strong> Desgaste natural das articulações</li>
        <li><strong>Sedentarismo:</strong> Falta de fortalecimento muscular</li>
      </ul>

      <h2>Como a Fisioterapia Ajuda</h2>
      <p>O tratamento fisioterapêutico é fundamental e inclui:</p>
      <ul>
        <li>Avaliação postural completa</li>
        <li>Exercícios de fortalecimento do core</li>
        <li>Alongamentos específicos</li>
        <li>Terapia manual</li>
        <li>Orientações ergonômicas</li>
      </ul>

      <blockquote>
        "A prevenção é sempre o melhor tratamento. Manter uma rotina de exercícios e cuidar da postura são essenciais."
      </blockquote>

      <h2>Dicas de Prevenção</h2>
      <p>Para evitar dores nas costas:</p>
      <ol>
        <li>Mantenha uma postura correta ao sentar e caminhar</li>
        <li>Pratique exercícios regularmente</li>
        <li>Alongue-se diariamente</li>
        <li>Evite carregar peso em excesso</li>
        <li>Cuide da ergonomia no trabalho</li>
      </ol>

      <h2>Conclusão</h2>
      <p>A fisioterapia oferece tratamentos eficazes e personalizados para dor nas costas. Se você está sofrendo com esse problema, procure um fisioterapeuta qualificado para uma avaliação completa.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80",
    category: categories[3], // Dor & Alívio
    tags: ["dor lombar", "postura", "ergonomia", "prevenção"],
    author: professionalAuthor,
    publishedAt: "2024-12-10T10:00:00Z",
    views: 1245,
    readTime: 8,
    status: "published",
    metaTitle: "Dor nas Costas: Causas e Tratamento Fisioterapêutico",
    metaDescription:
      "Entenda as causas da dor nas costas e como a fisioterapia pode ajudar no tratamento e prevenção. Dicas práticas de especialistas.",
  },
  {
    id: "2",
    title: "Técnicas de Reabilitação para Recuperação Total",
    slug: "tecnicas-reabilitacao-recuperacao-total",
    excerpt:
      "Entenda como as técnicas modernas de reabilitação auxiliam na recuperação completa do paciente.",
    content: `
      <h2>O que é Reabilitação Física?</h2>
      <p>A reabilitação física é um processo terapêutico que visa restaurar a função e mobilidade do paciente após lesões, cirurgias ou condições crônicas.</p>

      <h2>Técnicas Utilizadas</h2>
      <p>Diversas técnicas são aplicadas, como:</p>
      <ul>
        <li><strong>Cinesioterapia:</strong> Exercícios terapêuticos específicos</li>
        <li><strong>Terapia Manual:</strong> Técnicas de mobilização articular</li>
        <li><strong>Eletroterapia:</strong> Uso de correntes elétricas para tratamento</li>
        <li><strong>Hidroterapia:</strong> Exercícios em ambiente aquático</li>
      </ul>

      <blockquote>
        "A reabilitação bem conduzida é a chave para uma recuperação completa e duradoura."
      </blockquote>

      <h2>Conclusão</h2>
      <p>Com dedicação e acompanhamento adequado, é possível alcançar melhora significativa na qualidade de vida.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    category: categories[0], // Reabilitação
    tags: ["reabilitação", "recuperação", "técnicas", "tratamento"],
    author: professionalAuthor,
    publishedAt: "2024-12-08T14:30:00Z",
    views: 892,
    readTime: 10,
    status: "published",
    metaTitle: "Técnicas de Reabilitação: Recuperação Total",
    metaDescription:
      "Saiba como as técnicas de reabilitação atuam na recuperação completa. Métodos e resultados esperados.",
  },
  {
    id: "3",
    title: "Prevenção de Lesões: Cuide do Seu Corpo",
    slug: "prevencao-lesoes-cuide-corpo",
    excerpt:
      "Conheça as melhores estratégias para prevenir lesões e manter seu corpo saudável.",
    content: `
      <h2>Importância da Prevenção</h2>
      <p>Prevenir é sempre melhor que remediar. Um programa de prevenção inclui:</p>
      <ul>
        <li>Aquecimento adequado antes da atividade</li>
        <li>Fortalecimento muscular equilibrado</li>
        <li>Alongamentos específicos</li>
        <li>Trabalho proprioceptivo</li>
        <li>Progressão gradual de carga</li>
      </ul>

      <blockquote>
        "A prevenção é o melhor investimento que você pode fazer na sua saúde."
      </blockquote>

      <h2>Conclusão</h2>
      <p>A fisioterapia preventiva é fundamental para garantir uma vida ativa e saudável.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    category: categories[2], // Prevenção
    tags: ["prevenção", "lesões", "saúde", "exercícios"],
    author: professionalAuthor,
    publishedAt: "2024-12-05T09:15:00Z",
    views: 1567,
    readTime: 7,
    status: "published",
  },
  {
    id: "4",
    title: "Wellness e Bem-Estar: Uma Abordagem Holística",
    slug: "wellness-bem-estar-abordagem-holistica",
    excerpt:
      "Descubra como integrar práticas de wellness à sua rotina para melhorar sua qualidade de vida.",
    content: `
      <h2>O que é Wellness?</h2>
      <p>Wellness é uma abordagem holística que busca o equilíbrio entre corpo, mente e espírito para alcançar o bem-estar completo.</p>

      <h2>Benefícios</h2>
      <p>A prática de wellness proporciona:</p>
      <ul>
        <li>Melhora da saúde física</li>
        <li>Redução do estresse</li>
        <li>Maior equilíbrio emocional</li>
        <li>Aumento da energia</li>
        <li>Maior qualidade de vida</li>
      </ul>

      <blockquote>
        "Cuidar do corpo é cuidar da mente. O bem-estar é uma jornada, não um destino."
      </blockquote>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
    category: categories[1], // Wellness
    tags: ["wellness", "bem-estar", "saúde", "holístico"],
    author: professionalAuthor,
    publishedAt: "2024-12-03T11:00:00Z",
    views: 723,
    readTime: 6,
    status: "published",
  },
  {
    id: "5",
    title: "Estilo de Vida Ativo: Dicas para o Dia a Dia",
    slug: "estilo-vida-ativo-dicas",
    excerpt:
      "Saiba como manter um estilo de vida ativo e saudável com pequenas mudanças na rotina.",
    content: `
      <h2>A Importância de um Estilo de Vida Ativo</h2>
      <p>Manter-se ativo é fundamental para a saúde física e mental. Pequenas mudanças podem fazer grande diferença!</p>

      <h2>Dicas Práticas</h2>
      <ul>
        <li>Caminhe pelo menos 30 minutos por dia</li>
        <li>Faça pausas ativas durante o trabalho</li>
        <li>Escolha as escadas ao invés do elevador</li>
        <li>Pratique alongamentos diariamente</li>
        <li>Mantenha uma boa hidratação</li>
      </ul>

      <blockquote>
        "Cada passo conta. O importante é começar e manter a consistência."
      </blockquote>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1200&q=80",
    category: categories[4], // Lifestyle
    tags: ["lifestyle", "vida ativa", "saúde", "dicas"],
    author: professionalAuthor,
    publishedAt: "2024-12-01T08:45:00Z",
    views: 634,
    readTime: 9,
    status: "published",
  },
  {
    id: "6",
    title: "Exercícios de Alongamento para o Dia a Dia",
    slug: "exercicios-alongamento-dia-a-dia",
    excerpt:
      "Aprenda exercícios simples de alongamento que podem ser realizados diariamente para melhorar sua flexibilidade.",
    content: `
      <h2>Por que alongar?</h2>
      <p>O alongamento é essencial para manter a flexibilidade muscular, prevenir lesões e melhorar a postura. Apenas 10 minutos por dia podem fazer grande diferença!</p>

      <h2>Benefícios do Alongamento</h2>
      <ul>
        <li>Melhora da flexibilidade</li>
        <li>Redução de tensões musculares</li>
        <li>Prevenção de lesões</li>
        <li>Melhora da circulação</li>
        <li>Alívio do estresse</li>
        <li>Melhora da postura</li>
      </ul>

      <h2>Alongamentos Essenciais</h2>
      <p>Incorpore estes exercícios na sua rotina diária para manter seu corpo saudável e flexível.</p>

      <blockquote>
        "Dedicar alguns minutos por dia ao alongamento pode prevenir semanas de dor e desconforto."
      </blockquote>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e067?w=1200&q=80",
    category: categories[2], // Prevenção
    tags: ["alongamento", "flexibilidade", "exercícios", "bem-estar"],
    author: professionalAuthor,
    publishedAt: "2024-11-28T16:00:00Z",
    views: 2341,
    readTime: 5,
    status: "published",
  },
];
