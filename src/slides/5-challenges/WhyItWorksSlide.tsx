import * as React from 'react';

import { DiOpensource } from 'react-icons/di';
import { MdAttachMoney } from 'react-icons/md';

import { Slide } from '../../Slide';

interface WhyItWorksItemProps {
  title: string;
  open: string;
  closed: string;
}

const WhyItWorksItem: React.FC<WhyItWorksItemProps> = ({ title, open, closed }) => {
  const bulletStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem' };
  return (
    <li className="fragment">
      <strong className="fancy">{title}</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: '10px', marginBottom: '10px' }}>
        <li style={bulletStyle}>
          <DiOpensource fontSize="2rem" />
          {open}
        </li>
        <li style={bulletStyle}>
          <MdAttachMoney fontSize="2rem" />
          {closed}
        </li>
      </ul>
    </li>
  );
};

export const WhyItWorksSlide = () => (
  <Slide>
    <h2>Why does it work?</h2>
    <ul style={{ fontSize: '1.5rem' }}>
      <WhyItWorksItem
        title="Trust"
        open="Code is inspectable and thus more likely to be trusted"
        closed="Trust is brand-based"
      />
      <WhyItWorksItem
        title="Incentive"
        open="The ultimate goal is practicality"
        closed="Objectives are generally driven by profit"
      />
      <WhyItWorksItem title="Adoption" open="Low friction" closed="Procurement process" />
      <WhyItWorksItem
        title="Evolution"
        open="Open to community-changes, and can always fork"
        closed="Users can rarely drive any change"
      />
    </ul>
  </Slide>
);
