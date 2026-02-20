import * as React from 'react';

interface SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children }) => {
  return <section>{children}</section>;
};
