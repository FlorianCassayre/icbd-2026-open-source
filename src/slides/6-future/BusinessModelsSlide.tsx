import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

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
            { icon: FaPlusCircle, text: 'Community-first, long-term stability' },
            { icon: FaMinusCircle, text: 'Slower, more bureaucratic' },
            'e.g. Apache, Linux Foundation',
          ],
        },
        {
          title: 'Sponsorship',
          list: [
            'Voluntary funding from users & companies',
            { icon: FaPlusCircle, text: 'Fully open, high independence' },
            { icon: FaMinusCircle, text: 'Unstable income' },
            'e.g. GitHub Sponsors',
          ],
        },
        {
          title: 'Support',
          list: [
            'Revenue from support, consulting, hosting',
            { icon: FaPlusCircle, text: 'Code remains fully open' },
            { icon: FaMinusCircle, text: 'Requires strong brand & expertise' },
            'e.g. Red Hat',
          ],
        },
        {
          title: 'Dual licensing',
          list: [
            'OSS license + commercial license',
            { icon: FaPlusCircle, text: 'Funds development' },
            { icon: FaMinusCircle, text: 'Not open source, legal complexity' },
          ],
        },
        {
          title: 'Open core',
          list: [
            'Core open, advanced features proprietary',
            { icon: FaPlusCircle, text: 'Predictable revenue' },
            { icon: FaMinusCircle, text: 'Not open source, gating, product-first' },
          ],
        },
      ]}
    />
  </Slide>
);
