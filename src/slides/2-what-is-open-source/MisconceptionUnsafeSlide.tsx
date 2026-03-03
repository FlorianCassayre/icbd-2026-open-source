import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionUnsafeSlide: React.FC = () => (
  <MisconceptionSlide headline="Unsafe by design">
    <div>Quite the opposite!</div>
    <br />
    <ul className="font-medium">
      <li>Transparency enables auditing</li>
      <li>Security by obscurity is a weak mechanism</li>
      <li>Modern crytography is open: OpenSSL, GPG</li>
    </ul>
  </MisconceptionSlide>
);
