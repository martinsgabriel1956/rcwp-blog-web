export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent' | 'info' | 'warning';
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Category;
  tags: string[];
  author: Author;
  publishedAt: string;
  views: number;
  readTime: number;
  status: 'draft' | 'published';
  metaTitle?: string;
  metaDescription?: string;
}
