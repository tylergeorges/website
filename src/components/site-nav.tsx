'use client';

import { useMotions } from '@/hooks/use-motions';
import { NavOption, NavOptionLabel } from '@/components/nav-option';
import { useRouter } from 'next/navigation';

export const SiteNav = () => {
  const router = useRouter();

  const handleExperienceClick = () => {
    router.push('/experience');
  };

  useMotions({
    'space+e': () => {
      handleExperienceClick();
    },
    'space+s': () => {
      console.log('open settings');
    }
  });

  return (
    <ul className="my-16 w-full vertical">
      <NavOption onClick={handleExperienceClick}>
        <NavOptionLabel>
          <i className="nf-fa-flask nf size-fit text-[19px] leading-none" />
          Experience
        </NavOptionLabel>
        SPC e
      </NavOption>

      <NavOption>
        <NavOptionLabel>
          <i className="nf-fa-gear nf size-fit text-[19px] leading-none" /> Settings
        </NavOptionLabel>
        SPC s
      </NavOption>
    </ul>
  );
};
