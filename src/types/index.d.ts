import type { IconProps } from '@/components/icons';

interface Job {
  company: string;
  href: string;
  badges: [];
  location: string;
  title: string;
  description: string;
  logoUrl: string;
  start: string;
  end: string;
}

interface Project {
  title: string;
  description: string;
  links: { type: string; href: string; icon: JSX.Element }[];
  href: string;
  dates: string;
  technologies: string[];
  badges?: [];
  image: string;
  previewUrl: string;
}

interface Social {
  name: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
  navbar: boolean;
}

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    social: Record<string, Social>;
  };
  links: {
    github: string;
  };
  work: Job[];
  projects: Project[];
  skills: string[];
};
