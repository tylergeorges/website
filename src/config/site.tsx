import { Icons } from '@/components/icons';
import { SiteConfig } from '@/types';

export const siteConfig = {
  name: 'tyler georges',
  description: 'My personal site.',
  url: 'https://tylergeorges.com',
  ogImage: '',
  links: {
    github: 'https://github.com/tylergeorges/website'
  },
  work: [
    {
      company: 'WidgetBot',
      href: 'https://widgetbot.io',
      badges: [],
      location: 'Remote',
      title: 'Frontend Developer',
      logoUrl: '/widgetbot.png',
      start: 'Apr 2023',
      end: 'Current',
      description:
        'Refactored the outdated codebase with a new architecture utilizing GraphQl, Next.js, TypeScript, and reusable React Functional components, resulting in a 50% improvement in team efficiency.'
    }
  ],
  projects: [
    {
      title: 'Stiqqr',
      href: 'https://stiqqr.vercel.app',
      dates: 'Sep 2024 - Current',
      description:
        'stiqqr is a real-time task management app that simplifies project tracking and task management. Much like Linear, it offers a minimalist, productivity-focused design to help teams stay organized and productive. The app uses real-time updates, allowing teams to create, assign, and track tasks effortlessly. With an emphasis on collaboration, stiqqr ensures that projects stay on track, and everyone is informed.',
      technologies: [
        'Next.js',
        'Typescript',
        'Supabase',
        'Drizzle',
        'TailwindCSS',
        'React Query',
        'Magic UI'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://stiqqr.vercel.app',
          icon: <Icons.Globe className="size-3 text-primary-foreground" />
        },
        {
          type: 'Source',
          href: 'https://github.com/tylergeorges/stiqqr',
          icon: <Icons.GitHub className="size-3 text-primary-foreground" />
        }
      ],
      image: '',
      previewUrl: '/stiqqr-preview.png',
      badges: []
    },
    {
      title: 'Echo Chat',
      href: 'https://echochat.vercel.app',
      dates: 'Aug 2024 - Oct 2024',
      description:
        'Echo Chat is a real-time messaging platform inspired by Discord, designed to offer seamless communication within communities. Built using Next.js 14 App Router and Supabase real-time, Echo Chat allows users to create channels, send messages, and interact in real-time with intuitive, responsive UI powered by Tailwind CSS.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Drizzle',
        'TailwindCSS',
        'React Query',
        'Magic UI'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://echochat.vercel.app',
          icon: <Icons.Globe className="size-3 text-primary-foreground" />
        },
        {
          type: 'Source',
          href: 'https://github.com/tylergeorges/echochat',
          icon: <Icons.GitHub className="size-3 text-primary-foreground" />
        }
      ],
      image: '',
      previewUrl: '/echochat-preview.png',
      badges: []
    }
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        icon: Icons.GitHub,
        navbar: true,
        url: 'https://github.com/tylergeorges'
      },
      Email: {
        name: 'Email',
        icon: Icons.Mail,
        navbar: true,
        url: 'mailto:tmg320v@gmail.com'
      }
    }
  },
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js']
} satisfies SiteConfig;
