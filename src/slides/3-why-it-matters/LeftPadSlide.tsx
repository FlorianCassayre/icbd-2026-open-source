import { CgNpm } from 'react-icons/cg';

import leftPadAzerKoculu from '../../assets/left-pad-azer-koculu.png';
import leftPadTweets from '../../assets/left-pad-tweets.png';
import xkcdFragility from '../../assets/xkcd-fragility.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

const SOURCE = `
module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  var i = -1;

  ch || (ch = ' ');
  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}`.trim();

export const LeftPadSlide = () => (
  <Slide>
    <Slide>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ flex: 2 }}>
          <pre style={{ height: '100%', fontSize: '20px' }}>
            <code data-trim data-noescape className="language-javascript">
              {SOURCE}
            </code>
          </pre>
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <CgNpm color="#CB3837" fontSize="100px" />
          </div>
          <div>
            <strong>2.5 million</strong>
          </div>
          <span className="font-medium">monthly downloads</span>
          <br />
          <div>
            <Attribution>https://www.npmjs.com/package/left-pad</Attribution>
          </div>
        </div>
      </div>
    </Slide>
    <Slide>
      <img src={leftPadTweets} />
      <Attribution>https://twitter.com/seldo/status/712414400808755200</Attribution>
    </Slide>
    <Slide>
      <img src={leftPadAzerKoculu} height="600px" />
      <Attribution>https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c</Attribution>
    </Slide>
    <Slide>
      <img src={xkcdFragility} />
      <Attribution>https://xkcd.com/2102/</Attribution>
    </Slide>
  </Slide>
);
