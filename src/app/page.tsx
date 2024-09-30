import { AsciiTrail } from '@/components/ascii-trail';
import { Icons } from '@/components/icons';

import { ReactiveHero } from '@/components/reactive-hero';
import { Badge } from '@/components/ui/badge';
import { arr, cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, ...props }: CardProps) => (
  <div className="ring-contrast group relative flex min-h-32 w-full flex-col justify-end gap-2 overflow-clip rounded-lg bg-foreground-very-subtle p-6 text-white">
    <div
      className={cn('size-full gap-4 overflow-clip horizontal center-v', className)}
      {...props}
    />
  </div>
);

const Avatar = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'mr-3 aspect-square size-10 bg-indigo-400 shrink-0 horizontal center child:aspect-square child:size-[18px]',
      className
    )}
    {...props}
  />
);

const Experience = () => (
  <div className="inline-flex w-fit gap-4 rounded-xl font-medium">
    <div className="w-full items-center px-4 horizontal">
      <Avatar>
        <Icons.WidgetBot />
      </Avatar>

      <div className="vertical">
        <div className="justify-between horizontal">
          <h2 className="m-0 text-sm text-foreground-subtle">WidgetBot</h2>
          <Badge
            variant="fill"
            className="font-black tracking-tight ring-0"
            // className="rounded-none ring-1 ring-orange-500 bg-transparent font-mono text-xs text-orange-500 font-bold"
          >
            Frontend
          </Badge>
        </div>

        <p className="m-0 text-foreground truncate">
          Created an embedable discord app that you can embed on your site.
        </p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="relative flex size-full flex-1 px-4 center vertical">
      <div className="mx-auto size-full flex-1 pt-32">
        <div className="container size-full vertical">
          <div className="font-mono text-base font-bold vertical ~py-8/16">
            <h1 className="m-0">Tyler Georges</h1>

            <span className="text-primary">software developer</span>
            {/* <p className="m-0 text-foreground/40">
              im a <span className="">software developer</span> that loves <span className='text-primary'>creating</span>
            </p> */}
          </div>

          <div className="vertical ~gap-6/10">
            <h1 className="sm:leading-tighter relative mb-3 text-6xl font-bold sm:text-8xl">
              Experience
              <span className="absolute font-pixels text-sm font-normal text-foreground-subtle">
                [00]
              </span>
            </h1>
            {/* <ReactiveAscii >TEST   STRING</ReactiveAscii> */}
            {/* <ReactiveHero>TYLER GEORGES</ReactiveHero> */}

            <div className="size-full flex-1 vertical">
              <div>
                <div className="w-fit gap-5 rounded-2xl bg-foreground/15 p-4 horizontal center">
                  <div className="size-14 rounded-xl bg-indigo-500 horizontal center">
                    <Icons.WidgetBot className="size-7 text-foreground" />
                  </div>
                  {/* <img src="/echochat-landing.png" className="size-20 aspect-square  object-cover" /> */}

                  <div className="justify-start text-left vertical">
                    <span className="text-sm font-medium text-foreground/60">
                      Frontend Developer
                    </span>
                    <h1 className="text-2xl font-bold leading-none">WidgetBot</h1>
                  </div>
                </div>
              </div>

              {/* <div className="h-[42px] w-20 bg-primary" /> */}
            </div>

            {/* <AsciiTrail/> */}
          </div>
        </div>
      </div>
    </main>
  );
}

// mt-[11.6rem]
