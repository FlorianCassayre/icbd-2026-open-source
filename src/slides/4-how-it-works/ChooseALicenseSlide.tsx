import * as React from 'react';

import chooseALicense from '../../assets/choose-license.png';
import licensesShare from '../../assets/licenses-share.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

const LICENSE = `MIT License

Copyright (c) 2026 Florian Cassayre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export const ChooseALicenseSlide: React.FC = () => (
  <Slide>
    <Slide>
      <h3>Licensing</h3>
      <br />
      <pre style={{ height: '100%', width: '53%', fontSize: '10px' }}>
        <code data-trim data-noescape className="language-text">
          {LICENSE}
        </code>
      </pre>
    </Slide>
    <Slide>
      <img src={chooseALicense} />
      <Attribution>lafabriquedesmobilites.fr, CC-BY 3.0</Attribution>
    </Slide>
    <Slide>
      <img src={licensesShare} width="60%" />
      <Attribution>Robert Jones, CC BY-SA 4.0</Attribution>
    </Slide>
  </Slide>
);
