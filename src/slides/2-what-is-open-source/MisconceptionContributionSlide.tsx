import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionContributionSlide: React.FC = () => (
  <MisconceptionSlide headline="Only experts can contribute">
    <ul className="font-small">
      <li>By principle, no discrimination</li>
      <li>Any effort is generally appreciated and welcome</li>
      <li>Specific events encourage first-time contributions</li>
    </ul>
  </MisconceptionSlide>
);
