import * as React from 'react';

import type { IconType } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { DiOpensource } from 'react-icons/di';
import { MdEmail, MdLanguage } from 'react-icons/md';

import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

interface SocialLinkProps {
  icon: IconType;
  url: string;
  children: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, url, children }) => (
  <p>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Icon />
      {children}
    </a>
  </p>
);

export const EndSlide = () => (
  <Slide>
    <Slide>
      <h3>Let's stay in touch</h3>
      <SocialLink icon={AiFillGithub} url="https://github.com/FlorianCassayre">
        FlorianCassayre
      </SocialLink>
      <SocialLink icon={MdLanguage} url="https://florian.cassayre.me">
        florian.cassayre.me
      </SocialLink>
      <SocialLink icon={MdEmail} url="mailto:florian@cassayre.me">
        florian@cassayre.me
      </SocialLink>
      <Attribution>https://github.com/FlorianCassayre/icbd-2026-open-source</Attribution>
    </Slide>
    <Slide>
      <DiOpensource data-id="icon" fontSize={200} />
    </Slide>
  </Slide>
);
