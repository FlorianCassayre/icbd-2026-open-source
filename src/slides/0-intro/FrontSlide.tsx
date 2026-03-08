import { DiOpensource } from 'react-icons/di';

import { Slide } from '../../Slide';
import { range } from '../../util/arrays';

export const FrontSlide = () => (
  <Slide>
    {range(2).map(i => (
      <Slide key={i} data-auto-animate>
        <DiOpensource data-id="icon" fontSize={200} />
        {i === 0 && (
          <>
            <h1>Open Source</h1>
            <small>Florian Cassayre</small>
            <br />
            <span>IC Boost Day 2026</span>
            <br />
            <span>EPFL</span>
            <br />
            <small>11/03/2026</small>
          </>
        )}
      </Slide>
    ))}
  </Slide>
);
