import { Project } from '@/components/projects';

export const projects: Project[] = [
  {
    date: '2024 - present',
    title: 'fullstack - Echo Chat',
    link: 'https://github.com/tylergeorges/echochat',
    description: `A Real Time chat application powered by Next.js, Supabase, Drizzle. This project allows users to create guilds and invite their friends, and participate in real-time communication which is powered by Supabase.`,
    details: 'Next.js • Supabase • React Query • TypeScript • Tailwind.css'
  },
  {
    date: '2024 - present',
    title: 'fullstack - orchestr',
    description: `Leveraged React Server Components and React Query to optimize Supabase data
    handling, enabling seamless data prefetching and real-time optimistic updates for
    superior user experience and immediate feedback. Developed Quardian, an internal
    Supabase query wrapper utilizing the builder pattern to create type-safe React Query
    data fetching hooks and mutations.`,
    details: 'Next.js • React Query • Supabase • TypeScript • Tailwind.css'
  },
  {
    date: '2023',
    title: 'fullstack - glixel',
    description: `Fullstack social media app that utilizes custom react hooks to emulate an OS-like windowing system for efficient real-time window movement. Constructed a high-performing, type-safe API wrapper for my backend using TypeScript and technologies like
    Prisma for talking to my PlanetScale database. This improved development efficiency and reduced error rates by 20%, allowing for more streamlined and reliable application development.`,
    details: 'Next.js • NextAuth • PlanetScale • Prisma • TypeScript • Redux Toolkit'
  },
  {
    date: '2022 - present',
    title: 'mobile development - appathur',
    description: `Developing and maintaining Appathur, a chat app for a popular live streamer’s website with a daily active user base of 200+ and supporting up to tens of thousands of concurrent connections. Developed a custom React Hook that streamlined websocket communication and message rendering, including dynamic emote replacement`,
    details: 'React Native • Expo Go • TypeScript • Redux Toolkit'
  }
];
