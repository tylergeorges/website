import { SiteLogo } from '@/components/site-logo';
import { NewLine } from '@/components/new-line';
import { ArrayToken } from '@/components/ui/array-token';
import { StringToken } from '@/components/ui/string-token';
import { SiteNav } from '@/components/site-nav';
import { Container } from '@/components/container';

export default function Home() {
  return (
    <main className="flex-1 overflow-auto center vertical">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="font-bold">tyler georges</h1>

          <NewLine />

          <ArrayToken>
            <StringToken>software engineer</StringToken>
          </ArrayToken>

          <SiteLogo />
        </div>

        <SiteNav />

        <p className="text-center text-secondary">Welcome to my site, feel free to click around.</p>
      </Container>
    </main>
  );
}
