import * as React from 'react';

import { TbArrowLeftRight } from 'react-icons/tb';

import { Slide } from '../../Slide';

export const FreeSoftware: React.FC = () => (
  <Slide>
    <h2>Free software</h2>
    <br />
    <ul className="font-medium">
      <li>
        <strong>Open source software</strong>: collaboration-first philosophy
      </li>
      <li>
        <strong>Free software</strong>: freedom-first philosophy
      </li>
    </ul>
    <br />
    <br />
    <div className="fragment" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
      <TbArrowLeftRight style={{ transform: 'rotate(90deg)' }} />
      <div className="font-medium" style={{ fontStyle: 'italic' }}>
        Two philosophies leading to similar outcomes!
      </div>
    </div>
    <div className="fragment">
      <h4 style={{ marginTop: '50px' }}>In general...</h4>
      <p>
        Open source software <em>is also</em> free software.
      </p>
    </div>
  </Slide>
);
