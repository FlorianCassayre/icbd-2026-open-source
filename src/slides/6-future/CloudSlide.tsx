import * as React from 'react';

import { Slide } from '../../Slide';

export const CloudSlide: React.FC = () => (
  <Slide>
    <Slide>
      <h2>Cloud</h2>
      <ul className="font-medium">
        <li>Cloud made OSS the default infrastructure layer</li>
        <li>Enabled massive global adoption and scaling</li>
        <li>
          Shift of OSS: <strong>products</strong> → <strong>platforms</strong>
        </li>
      </ul>
    </Slide>
    <Slide>
      <h4>New tensions</h4>
      <ul className="font-medium">
        <li>Cloud providers can monetize OSS without equal contribution</li>
        <li>Maintainers face sustainability pressure</li>
        <li>Ecosystem control can centralize in large platforms</li>
      </ul>
    </Slide>
    <Slide>
      <h4>Foreseeable future in the cloud</h4>
      <ul className="font-medium">
        <li>Stronger cloud-native OSS ecosystems</li>
        <li>Platform-level collaboration between OSS and cloud providers</li>
        <li>Cloud-aware licensing strategies; despite of OSI incompliance</li>
      </ul>
    </Slide>
  </Slide>
);
