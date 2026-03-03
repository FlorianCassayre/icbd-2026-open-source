import { BsArrowDown } from 'react-icons/bs';

import ffmpegMars from '../../assets/ffmpeg-github.png';
import perseveranceRover from '../../assets/perseverance.jpg';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';
import { range } from '../../util/arrays';

export const FfmpegMarsSlide = () => (
  <Slide>
    {range(2).map(i => (
      <Slide key={i} data-auto-animate>
        {i > 0 && <h4>Officially extraterrestrial</h4>}
        <img src={ffmpegMars} width={i === 0 ? '60%' : '20%'} />
        {i > 0 && (
          <>
            <br />
            <BsArrowDown />
            <br />
            <img src={perseveranceRover} width="60%" />
            <Attribution>NASA, public domain</Attribution>
          </>
        )}
      </Slide>
    ))}
  </Slide>
);
