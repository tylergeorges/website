import { SiteNav } from '@/components/site-nav';
import { Container } from '@/components/container';
import { Ascii } from '@/components/ascii';

export default function Home() {
  return (
    <main className="flex size-full flex-1 overflow-hidden center">
      <Container className="center">
        <Ascii ascii="dragon" className="mb-8 text-secondary" />
        <SiteNav />

        <p className="text-center text-secondary">Welcome to my site, feel free to click around.</p>
      </Container>
    </main>
  );
}
