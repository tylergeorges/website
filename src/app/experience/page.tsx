import { projects } from '@/lib/data/projects';
import { workExperience } from '@/lib/data/work-experience';

import { Container } from '@/components/container';
import { Projects } from '@/components/projects';
import { SiteLogo } from '@/components/site-logo';

export default function ExperiencePage() {
  return (
    <main className="flex-1  vertical md:mx-auto md:max-w-3xl">

      <Container>
      <div className="my-10 text-center center-h vertical overflow-hidden">
        <SiteLogo />
      </div>

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
