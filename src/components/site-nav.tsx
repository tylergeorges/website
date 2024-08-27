'use client';

import { useRouter } from 'next/navigation';

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

  return (
    <ul className="-16 w-full vertical">
      <NavOption onClick={handleExperienceClick} motion="space+e">
        <NavOptionLabel>
          <i className="nf-fa-flask nf size-fit text-[19px] leading-none" />
          Experience
        </NavOptionLabel>
      </NavOption>

      <NavOption onClick={handleGithubClick} motion="space+g">
        <NavOptionLabel>
          <i className="nf-cod-github_inverted nf size-fit text-[19px] leading-none" />
          GitHub
        </NavOptionLabel>
      </NavOption>

      <NavOption onClick={handleEmailClick} motion="space+m">
        <NavOptionLabel>
          <i className="nf-md-email nf size-fit text-[19px] leading-none" />
          Email
        </NavOptionLabel>
      </NavOption>
    </ul>
  );
};
