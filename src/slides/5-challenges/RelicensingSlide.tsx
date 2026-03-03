import * as React from 'react';

import { AiOutlineSwap } from 'react-icons/ai';
import { DiOpensource } from 'react-icons/di';
import { IoMdLock } from 'react-icons/io';

import githubCla from '../../assets/github-cla.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const RelicensingSlide: React.FC = () => (
  <Slide>
    <Slide>
      <h2>Relicensing</h2>
      <p>
        {'='}
        <br />
        <div className="font-medium">Changing the license of an existing open source project</div>
        <br />
        <br />
        <div style={{ fontSize: '100px' }}>
          <DiOpensource />
          <AiOutlineSwap />
          <IoMdLock />
        </div>
      </p>
    </Slide>
    <Slide>
      <div className="font-medium">
        Possible under specific circumstances, typically when all contributors have signed a{' '}
        <strong>contributor license agreement</strong> (CLA)
      </div>
      <br />
      <img src={githubCla} />
    </Slide>
    <Slide>
      <h3>Should I sign a CLA?</h3>
      <div className="font-medium" style={{ fontStyle: 'italic', marginBottom: '10px' }}>
        "If you sign away your rights by agreeing to a CLA, you retain all of the rights associated with your work.
        [...] A CLA is a promise that software will one day become non-free"
      </div>
      <Attribution>https://drewdevault.com/2023/07/04/Dont-sign-a-CLA-2.html</Attribution>
      <br />
      <div>
        <h5>Reality</h5>
        <ul className="font-medium">
          <li>Many reputable projects require a CLA signature from contributors</li>
          <li>Not all CLA are born equal!</li>
        </ul>
      </div>
    </Slide>
    <Slide>
      <ul className="font-medium" style={{ marginBottom: '100px' }}>
        <li>Often, to explicitly certify that your contribution is your own work</li>
        <li>Protects the project from copyright disputes</li>
        <li>But, can allow maintainers to relicense the project</li>
        <li>May grant broader rights to the project owner than contributors expect</li>
      </ul>
      <div className="font-medium">
        <strong>Read the CLA carefully</strong>: understand whether you're granting rights for legal protection, or
        enabling future proprietary relicensing!
      </div>
    </Slide>
    <Slide>
      <h3>Notorious relicensing examples</h3>
      <ul className="font-medium" style={{ marginBottom: '60px' }}>
        <li>
          2018: MongoDB | <span className="muted">AGPLv3 → SSPL</span>
        </li>
        <li>
          2021: Elasticsearch | <span className="muted">Apache 2.0 → ELv2+SSPL</span>
          <ul>
            <li style={{ fontStyle: 'italic' }}>
              Forked to create <strong>OpenSearch</strong>
            </li>
          </ul>
        </li>
        <li>
          2024: Redis | <span className="muted">BSD 3-Clause → RSALv2+SSPL</span>
          <ul>
            <li style={{ fontStyle: 'italic' }}>
              Forked to create <strong>Valkey</strong>
            </li>
          </ul>
        </li>
      </ul>
      <div className="fragment font-medium" style={{ fontStyle: 'italic', marginBottom: '60px' }}>
        These (dual) licenses are not recognized as open source by the OSI
      </div>
      <div className="fragment font-medium">
        <strong>Take away</strong>: relicensing is not retroactive, project can always be forked
      </div>
    </Slide>
  </Slide>
);
