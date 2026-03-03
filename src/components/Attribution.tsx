import * as React from 'react';

interface AttributionProps {
  children: string;
}

export const Attribution: React.FC<AttributionProps> = ({ children }) => (
  <div
    style={{
      textAlign: 'center',
      fontSize: '0.8rem',
      opacity: 0.8,
    }}
  >
    {children}
  </div>
);
