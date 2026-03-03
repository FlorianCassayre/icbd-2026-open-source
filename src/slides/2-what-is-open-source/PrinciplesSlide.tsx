import * as React from 'react';

import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

const principles = [
  'Free Redistribution',
  'Source Code',
  'Derived Works',
  'Integrity of The Author’s Source Code',
  'No Discrimination Against Persons or Groups',
  'No Discrimination Against Fields of Endeavor',
  'Distribution of License',
  'License Must Not Be Specific to a Product',
  'License Must Not Restrict Other Software',
  'License Must Be Technology-Neutral',
];

export const PrinciplesSlide: React.FC = () => (
  <Slide>
    <h2>Principles</h2>
    <ol style={{ fontSize: '2.5rem' }}>
      {principles.map((principle, i) => (
        <li key={i} className="fragment">
          <span className="fancy">{principle}</span>
        </li>
      ))}
    </ol>
    <Attribution>https://opensource.org/osd</Attribution>
  </Slide>
);
