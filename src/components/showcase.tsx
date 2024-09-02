'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export const Showcase = () => {
  const [selected, setSelected] = useState(0);

  const handleButtonTitleClick = (e: React.SyntheticEvent, idx: number) => {
    e.preventDefault();

    if (selected === idx) return;

    setSelected(idx);
  };

  return (
    <div className="prose gap-24 center vertical">
      <div className="gap-1.5 horizontal">
        <Button
          selected={selected === 0}
          onClick={e => {
            handleButtonTitleClick(e, 0);
          }}
        >
          Work
        </Button>

        <Button
          onClick={e => {
            handleButtonTitleClick(e, 1);
          }}
          selected={selected === 1}
        >
          Projects
        </Button>
      </div>

      <div className="gap-[25px] center vertical">
        <img
          src="https://widgetbot.io/widgetbot_blurple.png"
          className="m-0 size-11 rounded-md md:size-14 md:rounded-[15px]"
        />

        <div className="gap-2.5 text-center vertical">
          <h2 className="m-0 text-base font-black">WidgetBot</h2>
          <p className="m-0 text-base">
            Refactored the outdated codebase with a new architecture utilizing GraphQl, Next.js,
            TypeScript, and reusable React Functional components.
          </p>
        </div>

        <div className="gap-[15px] vertical">
          <img
            src="https://pbs.twimg.com/media/ETNbEkKU4AA6rM7.jpg"
            className="m-0 size-full rounded-[10px] object-cover"
          />
          <img
            src="https://blog.widgetbot.io/content/images/size/w600/2023/07/discord-widgetbot-emerald-sub.png"
            className="m-0 size-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// interface ShowcaseListProps {
//   title: string;
// }

// export const ShowcaseList = ({}: ShowcaseListProps) => <div />;
