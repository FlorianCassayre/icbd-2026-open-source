import * as React from 'react';

import { Slide } from '../../Slide';

export const DefinitionSlide: React.FC = () => (
  <Slide>
    <h2>Open source?</h2>
    <div className="font-medium fancy" style={{ fontStyle: 'italic', marginTop: '80px' }}>
      Software whose source code is publicly available, and licensed in a way that allows anyone to use, modify, and
      distribute it freely.
    </div>
  </Slide>
);
