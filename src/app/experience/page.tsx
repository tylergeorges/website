import { projects } from '@/lib/data/projects';
import { workExperience } from '@/lib/data/work-experience';

import { Container } from '@/components/container';
import { Projects } from '@/components/projects';
import { Ascii } from '@/components/ascii';

export default function ExperiencePage() {
  return (
    <main className="flex-1   md:mx-auto md:max-w-3xl">
      <Container>
        <Ascii ascii="circles" className="mb-6 text-secondary" />

        <div>
          <h1 className="mb-3 font-bold">work experience</h1>
          <Projects projects={workExperience} />
        </div>

        <div>
          <h1 className="mb-3 font-bold">projects</h1>
          <Projects projects={projects} />
        </div>
      </Container>
    </main>
  );
}
