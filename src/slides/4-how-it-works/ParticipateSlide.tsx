import * as React from 'react';

import { Slide } from '../../Slide';

export const ParticipateSlide: React.FC = () => (
  <Slide>
    <Slide>
      <h2>Ice breakers</h2>
    </Slide>
    <Slide>
      <h3>Google Summer of Code</h3>
      <ul className="font-medium">
        <li>Program sponsored by Google</li>
        <li>~12 weeks of (paid) internship to work on an open source project</li>
        <li>Structured mentorship</li>
      </ul>
      <div className="font-medium" style={{ marginTop: '40px' }}>
        → <strong>Definitive career starter</strong>
      </div>
    </Slide>
    <Slide>
      <h3>Hacktoberfest</h3>
      <ul className="font-medium">
        <li>Month-long celebration of open source</li>
        <li>Maintainers can promote their project</li>
        <li>Contributors can propose their help</li>
        <li>In return, kudos and free goodies from sponsors</li>
      </ul>
    </Slide>
  </Slide>
);
