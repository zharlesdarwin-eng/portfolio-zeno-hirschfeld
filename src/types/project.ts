export interface Project {
  slug: string;
  badgeTop: string;
  badgeBottom: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  year?: string;
  features?: string[];
  link?: string;
}
