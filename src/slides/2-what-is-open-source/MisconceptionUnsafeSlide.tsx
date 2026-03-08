import * as React from 'react';

import { MisconceptionSlide } from './MisconceptionSlide';

export const MisconceptionUnsafeSlide: React.FC = () => (
  <MisconceptionSlide headline="Unsafe by design">
    <div className="fancy" style={{ fontStyle: 'italic' }}>
      Quite the opposite!
    </div>
    <br />
    <ul className="font-small">
      <li>Transparency enables auditing</li>
      <li>Security by obscurity is a weak mechanism</li>
      <li>
        Modern crytography is open: <em>OpenSSL</em>, <em>GPG</em>
      </li>
    </ul>
  </MisconceptionSlide>
);
