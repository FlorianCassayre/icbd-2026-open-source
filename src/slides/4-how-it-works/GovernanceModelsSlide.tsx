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
            '+ Strong vision, clear direction',
            '- Bottleneck, succession problem',
            'e.g. Linus Torvalds',
          ],
        },
        {
          title: 'Meritocratic',
          list: [
            'Influence earned through contribution',
            '+ Encourages contribution, scalable',
            '- Scattering',
            'e.g. Apache',
          ],
        },
        {
          title: 'Liberal',
          list: [
            'Decisions emerge through discussions and consensus',
            '+ Encourages participation, inclusive',
            '- Slow decision making, consensus is rare',
            'e.g. W3C',
          ],
        },
        {
          title: 'Foundation-led',
          list: [
            'Project owned by a nonprofit foundation',
            '+ Neutral, corporate/community balance',
            '- Bureaucratic, can become corporate',
            'e.g. Mozilla',
          ],
        },
        {
          title: 'Corporate-led',
          list: [
            'Project owned by a private company',
            '+ Funding, fast execution',
            '- Risk of license shift',
            'e.g. React',
          ],
        },
      ]}
    />
  </Slide>
);
