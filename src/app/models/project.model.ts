export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'webdev' | 'devops' | 'gaming';
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
