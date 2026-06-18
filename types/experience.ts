export interface Experience {
  id: string;
  title: string;
  organization: string;
  experience_type: string;
  year: number;
  date_label: string;
  description: string;
  technologies: string[];
  github_url?: string | null;
}