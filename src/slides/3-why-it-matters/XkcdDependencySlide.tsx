import * as React from 'react';

import xkcdDependency from '../../assets/xkcd-dependency.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

interface RectangleProps {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const Rectangle: React.FC<RectangleProps> = ({ index, x, y, width, height }) => (
  <div
    data-fragment-index={index}
    className="fragment fade-out"
    style={{
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: 'white',
    }}
  />
);

export const XkcdDependencySlide = () => (
  <Slide>
    <img src={xkcdDependency} />
    <Rectangle index={1} x={300} y={30} width={300} height={68} />
    <Rectangle index={1} x={320} y={95} width={20} height={20} />
    <Rectangle index={1} x={500} y={95} width={20} height={20} />
    <Rectangle index={2} x={520} y={250} width={140} height={150} />
    <Rectangle index={2} x={490} y={426} width={50} height={20} />
    <Rectangle index={2} x={530} y={400} width={20} height={30} />
    <br />
    <Attribution>https://xkcd.com/2347/</Attribution>
  </Slide>
);
