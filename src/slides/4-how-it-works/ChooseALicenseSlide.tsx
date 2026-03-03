import * as React from 'react';

import chooseALicense from '../../assets/choose-license.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const ChooseALicenseSlide: React.FC = () => (
  <Slide>
    <img src={chooseALicense} />
    <Attribution>lafabriquedesmobilites.fr, CC-BY 3.0</Attribution>
  </Slide>
);
