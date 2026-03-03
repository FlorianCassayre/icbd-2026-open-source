import * as React from 'react';

import type { IconType } from 'react-icons';

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  icon: IconType;
  children: string;
}

export const Title: React.FC<TitleProps> = ({ as: As, icon: Icon, children }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <As style={{ display: 'flex', alignItems: 'center' }}>
      <Icon />
      {children}
    </As>
  </div>
);
