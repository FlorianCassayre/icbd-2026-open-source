import * as React from 'react';

import cernConvention from '../../assets/cern-convention-1953.png';
import cernLibraryScreenshot from '../../assets/cern-library-screenshot.png';
import cernLogo from '../../assets/cern-logo.png';
import indicoLogo from '../../assets/indico-logo.png';
import indicoScreenshot1 from '../../assets/indico-screenshot-1.png';
import indicoScreenshot2 from '../../assets/indico-screenshot-2.png';
import invenioLogo from '../../assets/invenio-logo.png';
import whiteRabbitLogo from '../../assets/white-rabbit-logo.png';
import whiteRabbitScreenshot from '../../assets/white-rabbit-screenshot.png';
import zenodoScreenshot1 from '../../assets/zenodo-screenshot-1.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const CernOpenSourceSlide: React.FC = () => (
  <Slide>
    <Slide>
      <img src={cernLogo} width="300px" />
      <h2>Open source at CERN</h2>
      <Attribution>https://opensource.cern</Attribution>
    </Slide>
    <Slide>
      <h4>Convention signed in 1953</h4>
      <img src={cernConvention} />
      <Attribution>
        https://council.web.cern.ch/en/content/convention-establishment-european-organization-nuclear-research
      </Attribution>
    </Slide>
    <Slide>
      <div>
        <img src={invenioLogo} width="300px" />
      </div>
      <ul className="font-medium">
        <li>An ecosystem for building digital repositories</li>
        <li>Extensively modular and scalable</li>
        <li>Used to build e.g. Zenodo, Infoscience (EPFL)</li>
      </ul>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <img src={zenodoScreenshot1} width="400px" />
        <img src={cernLibraryScreenshot} width="400px" />
      </div>
    </Slide>
    <Slide>
      <div>
        <img src={indicoLogo} />
      </div>
      <ul className="font-medium">
        <li>Event management platform</li>
        <li>Used by many organizations and conference organizers</li>
        <li>Half a million active users</li>
      </ul>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <img src={indicoScreenshot1} width="400px" />
        <img src={indicoScreenshot2} width="400px" />
      </div>
    </Slide>
    <Slide>
      <div>
        <img src={whiteRabbitLogo} width="100px" />
      </div>
      <ul className="font-medium">
        <li>Framework for synchronizing two clocks over Ethernet</li>
        <li>Picosecond accuracy</li>
        <li>Typical distance of several kilometers</li>
      </ul>
      <div>
        <img src={whiteRabbitScreenshot} width="400px" style={{ marginBottom: 0 }} />
      </div>
      <Attribution>https://home.cern/news/news/computing/white-rabbit-meets-quantum-entanglement</Attribution>
    </Slide>
  </Slide>
);
