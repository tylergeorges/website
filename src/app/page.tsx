import { AsciiTrail } from '@/components/ascii-trail';
import { Icons } from '@/components/icons';

import { ReactiveHero } from '@/components/reactive-hero';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Experience = () => (
  <div className="col-span-1 col-start-1 col-end-1 horizontal">
    <div className="aspect-square size-96 shrink-0 rounded-xl bg-indigo-400 horizontal center">
      <Icons.WidgetBot className="size-16" />
    </div>

    <div className="prose-lg ml-12 self-end text-left vertical">
      <h1 className="m-0 font-bold">WidgetBot</h1>
      <p className="mt-0 font-mono text-foreground/60">Frontend Developer</p>

      <p className="m-0 max-w-[60ch] text-base font-light text-foreground/60">
        Enhanced user interactivity and responsiveness by developing dynamic UI components using
        React and Next.js, integrating Apollo GraphQL for efficient data fetching and real-time
        websocket connections.
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className={cn('relative flex size-full flex-1 vertical', 'px-20 pt-32')}>
      <div className="relative size-full flex-1 center vertical">
        <div className="size-full flex-1 gap-20 overflow-auto text-center vertical">
          {/* <ReactiveAscii >TEST   STRING</ReactiveAscii> */}
          {/* <ReactiveHero>TYLER GEORGES</ReactiveHero> */}
          {/* <p className="mono-title">TYLER GEORGES</p> */}
          {/* <h1 className="text-center text-[10vw] font-black leading-normal tracking-tight">
            tyler georges
          </h1> */}

          <div className="size-full flex-1 justify-start gap-20 text-left text-2xl vertical">
            <div className="justify-start gap-6 text-center text-2xl center vertical">
              <div className="aspect-square size-12 bg-emerald-500 center vertical">
                <h1 className="font-mono text-xl font-medium text-background">t</h1>
              </div>

              <div className="gap-12 vertical">
                <div className="vertical">
                  <h2 className="mb-0 text-xl font-bold">Tyler Georges</h2>

                  <p className="mb-0 text-base text-foreground/40">
                    Software Developer
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="size-full flex-1 vertical">
              <div className="grid grid-cols-2 gap-x-24 gap-y-6">
                <h3 className="col-start-1 col-end-1 font-mono text-lg font-light text-foreground/40">
                  Experience
                </h3>
                <h3 className="col-start-2 font-mono text-lg font-light text-foreground/40">
                  Projects
                </h3>

                <Experience />

                <div className="col-start-2">
                  <div className="">
                    <div className="size-64 rounded-2xl bg-foreground"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <AsciiTrail/> */}
      </div>
    </main>
  );
}
