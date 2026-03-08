import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

import { DoubleList } from '../../components/DoubleList';
import { Slide } from '../../Slide';

export const GovernanceModelsSlide = () => (
  <Slide>
    <h2>Governance models</h2>
    <br />
    <DoubleList
      fancy
      items={[
        {
          title: 'Benevolent Dictator for Life',
          list: [
            'Decision-making by a single individual',
            { icon: FaPlusCircle, text: 'Strong vision, clear direction' },
            { icon: FaMinusCircle, text: 'Bottleneck, succession problem' },
            'e.g. Linus Torvalds',
          ],
        },
        {
          title: 'Meritocratic',
          list: [
            'Influence earned through contribution',
            { icon: FaPlusCircle, text: 'Encourages contribution, scalable' },
            { icon: FaMinusCircle, text: 'Scattering' },
            'e.g. Apache',
          ],
        },
        {
          title: 'Liberal',
          list: [
            'Decisions emerge through discussions and consensus',
            { icon: FaPlusCircle, text: 'Encourages participation, inclusive' },
            { icon: FaMinusCircle, text: 'Slow decision making, consensus is rare' },
            'e.g. W3C',
          ],
        },
        {
          title: 'Foundation-led',
          list: [
            'Project owned by a nonprofit foundation',
            { icon: FaPlusCircle, text: 'Neutral, corporate/community balance' },
            { icon: FaMinusCircle, text: 'Bureaucratic, can become corporate' },
            'e.g. Mozilla',
          ],
        },
        {
          title: 'Corporate-led',
          list: [
            'Project owned by a private company',
            { icon: FaPlusCircle, text: 'Funding, fast execution' },
            { icon: FaMinusCircle, text: 'Risk of license shift' },
            'e.g. React',
          ],
        },
      ]}
    />
  </Slide>
);
