import { Showcase } from '@/components/showcase';

const Border = () => <span className="text-primary">█</span>;

export default function Home() {
  return (
    <main className="flex size-full flex-1 text-[22px] vertical">
      <div className="prose size-full max-w-full flex-1 gap-36 px-11 pt-44 center-h vertical">
        <div className="w-full max-w-full text-left center-h vertical">
          <div className="horizontal">
            <h1 className="relative m-0 text-[88px] uppercase leading-[0.75] tracking-[-5px]">
              tyler_georges
            </h1>
            <p className="absolute right-40 m-0 ml-[1ch] mt-0 h-fit text-[11px] uppercase leading-[normal] text-primary-foreground">
              <Border />
              &nbsp;
              <span className="bg-primary">
                {' software developer'}
                &nbsp;
              </span>
            </p>
          </div>
        </div>

        <Showcase />
      </div>
    </main>
  );
}
