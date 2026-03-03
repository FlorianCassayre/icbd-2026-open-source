import * as React from 'react';

import { Slide } from '../../Slide';

export const OtherOpenSlide: React.FC = () => (
  <Slide>
    <h2>The great "open"</h2>
    <ul>
      <li>
        <strong className="fancy">Science</strong> - knowledge, data
      </li>
      <li>
        <strong className="fancy">Technology</strong> - source code, hardware, standards
      </li>
      <li>
        <strong className="fancy">Culture</strong> - media, archives
      </li>
      <li>
        <strong className="fancy">Governance</strong> - democracy, transparency
      </li>
      <li>...</li>
    </ul>
  </Slide>
);
