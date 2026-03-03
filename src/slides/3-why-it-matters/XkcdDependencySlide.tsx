import xkcdDependency from '../../assets/xkcd-dependency.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const XkcdDependencySlide = () => (
  <Slide>
    <img src={xkcdDependency} />
    <br />
    <Attribution>https://xkcd.com/2347/</Attribution>
  </Slide>
);
