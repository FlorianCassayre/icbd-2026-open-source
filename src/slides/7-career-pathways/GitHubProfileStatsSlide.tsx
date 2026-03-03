import * as React from 'react';

import { Slide } from '../../Slide';

export const GitHubProfileStatsSlide: React.FC = () => (
  <Slide>
    <h2>Fact</h2>
    <div className="fragment">
      <div className="font-medium">
        <strong>3 out 4</strong> resumes
        <br />
        include an empty GitHub profile
      </div>
    </div>
  </Slide>
);
