export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  slug: string;
  image_url: string;
  github_url?: string | null;
  demo_url?: string | null;
  article_url?: string | null;
  tools: string[];
  challenge_solution: string;
  key_features: string;
}