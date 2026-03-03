import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionContributionSlide: React.FC = () => (
  <MisconceptionSlide headline="Only experts can contribute">
    <ul className="font-medium">
      <li>By principle, no discrimination</li>
      <li>Any improvement is generally welcome and efforts are appreciated</li>
      <li>Specific events encourage first-time contributions</li>
    </ul>
  </MisconceptionSlide>
);
