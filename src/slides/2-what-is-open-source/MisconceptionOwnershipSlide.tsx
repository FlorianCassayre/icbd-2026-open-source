import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionOwnershipSlide: React.FC = () => (
  <MisconceptionSlide headline="Open source software is copyright-free">
    <div className="fancy" style={{ fontStyle: 'italic' }}>
      Open source software is still copyrighted!
    </div>
    <br />
    <ul className="font-small">
      <li>The author(s) retain copyright</li>
      <li>But permission is granted to use, modify and share the software</li>
    </ul>
  </MisconceptionSlide>
);
