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
        <div className="size-11 rounded-md bg-secondary md:size-14 md:rounded-[15px]" />

        <div className="text-center">
          <h2 className="m-0 text-[22px] font-black">WidgetBot</h2>
          <p className="m-0 text-base">frontend developer</p>
        </div>
      </div>
    </div>
  );
};

// interface ShowcaseListProps {
//   title: string;
// }

// export const ShowcaseList = ({}: ShowcaseListProps) => <div />;
