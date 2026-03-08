import * as React from 'react';

import type { IconType } from 'react-icons';
import { BiPaint } from 'react-icons/bi';
import { FiTool } from 'react-icons/fi';
import { MdOutlineScience } from 'react-icons/md';
import { RiGovernmentLine } from 'react-icons/ri';

import { Slide } from '../../Slide';

interface ItemProps {
  title: string;
  content: string[];
  icon: IconType;
}

const Item: React.FC<ItemProps> = ({ title, content, icon: Icon }) => (
  <div
    style={{
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#d0d0d0',
      padding: '5px 10px',
      borderRadius: '10px',
      boxShadow: '1px 1px 10px #d0d0d0',
    }}
  >
    <Icon style={{ marginBottom: '-10px' }} />
    <strong className="fun">{title}</strong>
    <div>
      {content.map((bullet, i) => (
        <div key={i} className="font-small" style={{ fontStyle: 'italic' }}>
          {bullet}
        </div>
      ))}
    </div>
  </div>
);

export const OtherOpenSlide: React.FC = () => (
  <Slide>
    <h2>The great "open"</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1.5rem', marginTop: '50px' }}>
      <Item title="Science" content={['Knowledge', 'Data']} icon={MdOutlineScience} />
      <Item title="Technology" content={['Standards', 'Source code', 'Hardware']} icon={FiTool} />
      <Item title="Culture" content={['Media', 'Archives']} icon={BiPaint} />
      <Item title="Governance" content={['Democracy', 'Decisions']} icon={RiGovernmentLine} />
    </div>
  </Slide>
);
