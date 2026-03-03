import * as React from 'react';

import { Slide } from '../../Slide';

const Space = () => <span style={{ fontSize: 0 }}>.</span>;

interface MisconceptionSlideProps {
  headline: string;
  children: React.ReactNode;
}

export const MisconceptionSlide: React.FC<MisconceptionSlideProps> = ({ headline, children }) => (
  <Slide>
    <h3 className="fragment strike">
      <Space /> {headline} <Space />
    </h3>
    <br />
    <p className="fragment">{children}</p>
  </Slide>
);
