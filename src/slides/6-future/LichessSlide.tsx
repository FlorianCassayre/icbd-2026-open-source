import * as React from 'react';

import { CiFaceSmile } from 'react-icons/ci';

import lichessScreenshot from '../../assets/lichess-screenshot.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';
import { range } from '../../util/arrays';

export const LichessSlide: React.FC = () => (
  <Slide>
    {range(2).map(i => (
      <Slide key={i} data-auto-animate>
        <h3>A success story: lichess</h3>
        {i === 0 ? (
          <>
            <img src={lichessScreenshot} />
            <Attribution>https://lichess.org/</Attribution>
          </>
        ) : (
          <ul className="font-medium">
            <li>Chess website founded by Thibault Duplessis in 2010</li>
            <li>
              Runs 100% on donations (no ads, no paywall)
              <ul>
                <li>Allows paying FTEs for the development</li>
                <li>Donations do not provide any game advantage</li>
              </ul>
            </li>
            <li>Competes with billion-dollar companies</li>
            <li className="fragment">
              Runs on Scala <CiFaceSmile />
            </li>
          </ul>
        )}
      </Slide>
    ))}
  </Slide>
);
