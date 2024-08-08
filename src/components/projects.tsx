import { Icons } from '@/components/icons';
import {
  ProjectContent,
  ProjectDate,
  ProjectDescription,
  ProjectDetails,
  ProjectRow,
  ProjectTitle
} from '@/components/project-row';
import Link from 'next/link';

export interface Project {
  date: string;
  title: string;
  description: string;
  details: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) =>
  projects.map((row, idx) => (
    <ProjectRow key={`${row.title}-${idx}`}>
      <ProjectDate>{row.date}</ProjectDate>

      <ProjectContent>
        {row?.link ? (
          <Link
            href={row.link}
            target="_blank"
            className="group w-fit horizontal center-v group-hover:underline"
          >
            <ProjectTitle>{row.title}</ProjectTitle>

            <Icons.LinkArrow className="ml-2 size-2" />
          </Link>
        ) : (
          <ProjectTitle>{row.title}</ProjectTitle>
        )}

        <ProjectDescription>{row.description}</ProjectDescription>

        <ProjectDetails>{row.details}</ProjectDetails>
      </ProjectContent>
    </ProjectRow>
  ));
