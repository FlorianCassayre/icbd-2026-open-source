import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionQualitySlide: React.FC = () => (
  <MisconceptionSlide headline="Free = Low quality">
    <div className="fancy" style={{ fontStyle: 'italic' }}>
      Some of the finest software out there is open source!
    </div>
    <br />
    <ul className="font-small">
      <li>Linux, used by billions of devices</li>
      <li>Firefox, a major independent web browser</li>
      <li>Postgresql, one of the most advanced DBMS</li>
    </ul>
  </MisconceptionSlide>
);
