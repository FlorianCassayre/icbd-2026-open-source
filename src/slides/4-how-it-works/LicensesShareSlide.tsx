import * as React from 'react';

import licensesShare from '../../assets/licenses-share.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const LicensesShareSlide: React.FC = () => (
  <Slide>
    <img src={licensesShare} width="60%" />
    <Attribution>Robert Jones, CC BY-SA 4.0</Attribution>
  </Slide>
);
