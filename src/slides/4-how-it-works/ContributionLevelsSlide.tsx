import * as React from 'react';

import { DoubleList } from '../../components/DoubleList';
import { Slide } from '../../Slide';

export const ContributionLevelsSlide: React.FC = () => (
  <Slide>
    <h2>Getting started</h2>
    <br />
    <DoubleList
      items={[
        { title: 'Observer', list: ['User of the software', 'Read the source code', 'Engage with the community'] },
        { title: 'Reporter', list: ['Open a bug report', 'Suggest a feature', 'Provide feedback'] },
        {
          title: 'Improver',
          list: ['Improve the documentation', 'Fix a bug', "Review another person's pull/merge request"],
        },
        { title: 'Builder', list: ['Implement a new feature', 'Write a design discussion or RFC'] },
        { title: 'Leader', list: ['Carry a vision', 'Define project roadmap', 'Take architecture decisions'] },
      ]}
      fancy
      ordered
    />
  </Slide>
);
