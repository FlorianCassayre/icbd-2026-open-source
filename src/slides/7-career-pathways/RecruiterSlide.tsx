import * as React from 'react';

import { Slide } from '../../Slide';

export const RecruiterSlide: React.FC = () => (
  <Slide style={{ fontSize: '2rem' }}>
    <Slide>
      <h3 style={{ color: 'green' }}>Do</h3>
      <ul className="font-small">
        <li>Use your GitHub/GitLab/... profile as a public portfolio</li>
        <li>Pin your most relevant projects</li>
        <li>Show your projects in action (link to an application, website, docs, ...)</li>
        <li>Highlight autonomy and maturity (technical depth, cleanliness)</li>
      </ul>
    </Slide>
    <Slide>
      <h3 style={{ color: 'red' }}>Don't</h3>
      <ul>
        <li>Linking an empty profile</li>
        <li>Projects without a README or a description</li>
        <li>Quantity ≠ Quality</li>
      </ul>
    </Slide>
  </Slide>
);
