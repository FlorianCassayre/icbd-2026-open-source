import { Slide } from '../../Slide';

export const PersonalExperienceSlide = () => (
  <Slide>
    <h3>My experience with open source</h3>
    <br />
    <div className="fragment" style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <div>
          <strong>User</strong>
        </div>
        <ul style={{ fontSize: '1.5rem' }}>
          <li>Ubuntu Desktop user</li>
          <li>Favor free open source software over commercial alternatives whenever possible</li>
        </ul>
      </div>
      <div className="fragment" style={{ flex: 1 }}>
        <div>
          <strong>Maintainer</strong>
        </div>
        <ul style={{ fontSize: '1.5rem' }}>
          <li>All my personal projects are MIT-licensed</li>
          <li>Maintain an open source search engine that receives 1 million yearly visits</li>
          <li>Formerly, employed full-time to work on the Invenio project</li>
        </ul>
      </div>
    </div>
  </Slide>
);
