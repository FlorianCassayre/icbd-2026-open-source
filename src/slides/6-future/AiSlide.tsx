import * as React from 'react';

import githubCommitsAi from '../../assets/github-commits-ai.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const AiSlide: React.FC = () => (
  <Slide>
    <Slide>
      <h3>The elephant in the room</h3>
      <img src={githubCommitsAi} />
      <Attribution>https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point</Attribution>
      <Attribution>AI generated plot, but data is real</Attribution>
    </Slide>
    <Slide>
      <h4>What this tells us</h4>
      <div className="font-small" style={{ fontStyle: 'italic', marginBottom: '20px' }}>
        Similar to what was observed in the private industry!
      </div>
      <ul className="font-small">
        <li>Velocity is increasing, as writing code may no longer be the bottleneck</li>
        <li>Faster iteration and prototyping</li>
        <li>Understanding systems, architecture and scalability will likely remain valuable skills</li>
        <li>Ultimately software is written for humans</li>
      </ul>
    </Slide>
  </Slide>
);
