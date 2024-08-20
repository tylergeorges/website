'use client';

import { useRouter } from 'next/navigation';

import { useMotions } from '@/hooks/use-motions';

import { NavOption, NavOptionLabel } from '@/components/nav-option';

export const SiteNav = () => {
  const router = useRouter();

  const handleExperienceClick = () => {
    router.push('/experience');
  };

  const openInNewTab = (link: string) => {
    window.open(link, '_blank');
  };

  const handleEmailClick = () => {
    openInNewTab('mailto:tmg320v@gmail.com');
  };

  const handleGithubClick = () => {
    openInNewTab('https://github.com/tylergeorges');
  };

  useMotions({
    'space+e': () => {
      handleExperienceClick();
    },
    'space+c': () => {
      handleEmailClick();
    },
    'space+g': () => {
      handleGithubClick();
    }
  });

  return (
    <ul className="-16 w-full vertical">
      <NavOption onClick={handleExperienceClick}>
        <NavOptionLabel>
          <i className="nf-fa-flask nf size-fit text-[19px] leading-none" />
          Experience
        </NavOptionLabel>
        SPC e
      </NavOption>

      <NavOption onClick={handleGithubClick}>
        <NavOptionLabel>
          <i className="nf-cod-github_inverted nf size-fit text-[19px] leading-none" />
          GitHub
        </NavOptionLabel>
        SPC g
      </NavOption>

      <NavOption onClick={handleEmailClick}>
        <NavOptionLabel>
          <i className="nf-md-email nf size-fit text-[19px] leading-none" />
          Email
        </NavOptionLabel>
        SPC c
      </NavOption>
    </ul>
  );
};
