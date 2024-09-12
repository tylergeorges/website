import { AsciiTrail } from '@/components/ascii-trail';
import { Icons } from '@/components/icons';

import { ReactiveHero } from '@/components/reactive-hero';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Experience = () => (
  <div className="col-span-3 w-full max-w-full items-start justify-between horizontal">
    <div className="flex-[2]">
      <div className="h-96 w-[46.4rem] shrink-0 bg-indigo-400 horizontal center">
        <Icons.WidgetBot className="size-16" />
      </div>
    </div>

    <p className="mt-0 max-w-[23.6rem] flex-[0.5] font-mono font-extralight text-foreground/40">
      [001]
    </p>

    <div className="flex-[2] text-left vertical">
      <h2 className="mb-0 mt-0 font-bold tracking-[-.01em]">WidgetBot</h2>

      <p className="mt-0 max-w-[50ch] pt-5 font-mono text-sm font-light text-foreground/60">
        Enhanced user interactivity and responsiveness by developing dynamic UI components using
        React and Next.js, integrating Apollo GraphQL for efficient data fetching and real-time
        websocket connections.
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="relative flex size-full flex-1 px-4 vertical">
      <header className="py-5 font-mono text-foreground/40">tyler_georges</header>

      <div className="center vertical">
        <h1 className="m-0 text-center text-[8rem]  up ">welcome</h1>

        <div className="max-w-[60ch]">
          <p className="mt-3  text-left font-mono text-sm text-foreground/40 uppercase">
            im a software developer that loves creating
          </p>
        </div>
      </div>

      <div className="relative size-full max-w-full flex-1 px-[calc(50vw_-_70.4rem)]">
        <div className="items-baseline horizontal">
          <h1 className="m-0 text-[8rem] leading-none tracking-[-.02em]">work</h1>
          <p className="m-0 ml-3 self-end font-mono text-[11px] font-normal text-foreground/40">
            [013]
          </p>
        </div>
        {/* <ReactiveAscii >TEST   STRING</ReactiveAscii> */}
        {/* <ReactiveHero>TYLER GEORGES</ReactiveHero> */}

        <div className="mt-[11.6rem] grid w-full grid-cols-3">
          <Experience />
        </div>

        {/* <AsciiTrail/> */}
      </div>
    </main>
  );
}
