import React from 'react';

interface ProjectRowProps {}

export const ProjectRow = ({ children }: React.PropsWithChildren<ProjectRowProps>) => (
  <div className="mb-12 grid md:mb-8 md:grid-cols-4 md:text-sm">{children}</div>
);

export const ProjectDate = ({ children }: React.PropsWithChildren<ProjectRowProps>) => (
  <div className="col-span-3 text-foreground/50 horizontal md:col-span-1">{children}</div>
);

export const ProjectTitle = ({ children }: React.PropsWithChildren<ProjectRowProps>) => (
  <h2 className="center-v group-hover:underline">{children}</h2>
);

export const ProjectDescription = ({ children }: React.PropsWithChildren<ProjectRowProps>) => (
  <p className="my-2 text-foreground/50">{children}</p>
);

export const ProjectDetails = ({ children }: React.PropsWithChildren<ProjectRowProps>) => (
  <p className="my-2 text-foreground/[0.35]">{children}</p>
);

export const ProjectContent = ({ children }: React.PropsWithChildren<ProjectRowProps>) => (
  <div className="col-span-3 row-start-3 break-words md:row-span-1">{children}</div>
);
