import { DoubleList } from '../../components/DoubleList';
import { Slide } from '../../Slide';

export const BusinessModelsSlide = () => (
  <Slide>
    <h2>Business models</h2>
    <br />
    <DoubleList
      swapped
      items={[
        {
          title: 'Foundation',
          list: [
            'Project stewarded by neutral nonprofit',
            '+ Community-first, long-term stability',
            '- Slower, more bureaucratic',
            'e.g. Apache, Linux Foundation',
          ],
        },
        {
          title: 'Sponsorship',
          list: [
            'Voluntary funding from users & companies',
            '+ Fully open, high independence',
            '- Unstable income',
            'e.g. GitHub Sponsors',
          ],
        },
        {
          title: 'Support',
          list: [
            'Revenue from support, consulting, hosting',
            '+ Code remains fully open',
            '- Requires strong brand & expertise',
            'e.g. Red Hat',
          ],
        },
        {
          title: 'Dual licensing',
          list: ['OSS license + commercial license', '+ Funds development', '- Not open source, legal complexity'],
        },
        {
          title: 'Open core',
          list: [
            'Core open, advanced features proprietary',
            '+ Predictable revenue',
            '- Not open source, feature gating, product-first mindset',
          ],
        },
      ]}
    />
  </Slide>
);
