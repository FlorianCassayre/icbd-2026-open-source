import cernLogo from '../../assets/cern-logo.png';
import epflLogo from '../../assets/epfl-logo.png';
import florianCassayre from '../../assets/florian-cassayre.jpg';
import { Slide } from '../../Slide';

export const SpeakerSlide = () => (
  <Slide>
    <img src={florianCassayre} width="100px" style={{ borderRadius: '50%' }} />
    <h4>Florian Cassayre</h4>
    <div
      className="fragment"
      style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '50px', marginTop: '50px' }}
    >
      <div style={{ width: '200px', display: 'flex', justifyContent: 'center' }}>
        <img src={epflLogo} width="150px" />
      </div>
      <div style={{ textAlign: 'left' }}>
        <span className="font-medium">Computer Science</span>
        <div className="muted font-small">2016 - 2022</div>
      </div>
    </div>
    <div
      className="fragment"
      style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '50px', marginTop: '10px' }}
    >
      <img src={cernLogo} width="200px" />
      <div style={{ textAlign: 'left' }}>
        <span className="font-medium">Staff Software Engineer</span>
        <div className="muted font-small">
          2020 - 2021
          <br />
          2022 - present
        </div>
      </div>
    </div>
    <div className="fragment font-small" style={{ marginTop: '50px' }}>
      <div>Areas of interest:</div>
      <ul style={{ fontSize: '20px' }}>
        <li>Software engineering (web full-stack)</li>
        <li>Deep learning</li>
        <li>Formal methods</li>
      </ul>
    </div>
  </Slide>
);
