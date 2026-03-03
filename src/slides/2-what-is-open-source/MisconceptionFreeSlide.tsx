import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionFreeSlide: React.FC = () => (
  <MisconceptionSlide headline="Free = Non profit">
    <ul className="font-medium">
      <li>Open source allows commercial use, and does not discriminate it</li>
      <li>
        A lot of open source projects are backed by companies, and successful business models have emerged around open
        source software
      </li>
    </ul>
  </MisconceptionSlide>
);
