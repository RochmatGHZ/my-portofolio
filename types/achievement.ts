export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issued_at: string;
  image_url: string;
  certificate_url: string;
  summary: string | null;
}
