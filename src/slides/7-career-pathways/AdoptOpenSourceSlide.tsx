import * as React from 'react';

import { BsArrowDown } from 'react-icons/bs';

import deGoogleIfyScreenshot from '../../assets/de-google-ify-screenshot.png';
import openSourceAlternativeToScreenshot from '../../assets/opensourcealternative-to-screenshot.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const AdoptOpenSourceSlide: React.FC = () => (
  <Slide>
    <Slide>
      <h4>Free open source software alternatives</h4>
      <div className="font-small" style={{ fontStyle: 'italic' }}>
        You can support open source software as a user!
      </div>
      <div className="font-medium" style={{ marginTop: '20px', marginBottom: '60px' }}>
        For the vast majority of commercial software available,
        <br />
        there exists <strong>solid</strong> FOSS alternatives.
      </div>
      <BsArrowDown style={{ fontSize: '80px' }} />
    </Slide>
    <Slide>
      <h5>opensourcealternative.to</h5>
      <img src={openSourceAlternativeToScreenshot} width="700px" />
      <Attribution>https://www.opensourcealternative.to/</Attribution>
    </Slide>
    <Slide>
      <h5>De-google-ify Internet</h5>
      <img src={deGoogleIfyScreenshot} width="700px" />
      <Attribution>https://degooglisons-internet.org/en/</Attribution>
    </Slide>
  </Slide>
);
