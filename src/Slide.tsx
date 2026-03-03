import * as React from 'react';
import type { ComponentProps } from 'react';

interface SlideProps extends ComponentProps<'section'> {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = props => {
  return <section {...props} />;
};
