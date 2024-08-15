'use client';

import { useRouter } from 'next/navigation';

import { useMotions } from '@/hooks/use-motions';
import { modal } from '@/components/modal/system';

import { ContactModal } from '@/components/contact-modal';
import { NavOption, NavOptionLabel } from '@/components/nav-option';

export const SiteNav = () => {
  const router = useRouter();

  const handleExperienceClick = () => {
    router.push('/experience');
  };

  const handleContactClick = () => {
    modal(() => <ContactModal />);
  };

  useMotions({
    'space+e': () => {
      handleExperienceClick();
    },
    'space+c': () => {
      handleContactClick();
    },
    'space+s': () => {
      console.log('open settings');
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

      <NavOption onClick={handleContactClick}>
        <NavOptionLabel>
          <i className="nf-md-contacts nf size-fit text-[19px] leading-none" />
          Contact
        </NavOptionLabel>
        SPC c
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
