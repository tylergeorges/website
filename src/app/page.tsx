import { ReactiveAscii } from '@/components/reactive-ascii';
import { Showcase } from '@/components/showcase';

const Border = () => <span className="text-primary">█</span>;

export default function Home() {
  return (
    <main className="flex size-full flex-1 vertical">
      <div className="size-full flex-1 gap-36 center vertical">
        <div className="flex-1 horizontal center size-full">
          <ReactiveAscii >TEST   STRING</ReactiveAscii>
          {/* <ReactiveAscii >TYLER GEORGES</ReactiveAscii> */}
        </div>
      </div>
    </main>
  );
}
