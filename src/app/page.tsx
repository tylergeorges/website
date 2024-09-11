import { AsciiTrail } from '@/components/ascii-trail';

import { ReactiveHero } from '@/components/reactive-hero';

const Border = () => <span className="text-primary">█</span>;

export default function Home() {
  return (
    <main className="relative flex size-full flex-1 vertical">
      <div className="relative size-full flex-1 center vertical">
        <span>{'>>>> work'}</span>
        <div className="flex-1 overflow-auto text-center horizontal center">
          {/* <ReactiveAscii >TEST   STRING</ReactiveAscii> */}
          <ReactiveHero>
            TYLER GEORGES
          </ReactiveHero>
          {/* <p className="mono-title">TYLER GEORGES</p> */}
        </div>

        <h1 className="text-center font-sans text-[10vw] font-black uppercase leading-normal tracking-tight">
          LOREM IPSUMS
        </h1>

        {/* <AsciiTrail/> */}
      </div>
    </main>
  );
}
