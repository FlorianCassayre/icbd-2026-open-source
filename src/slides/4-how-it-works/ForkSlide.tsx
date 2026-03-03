import { CgGitFork } from 'react-icons/cg';

import { Title } from '../../components/Title';
import { Slide } from '../../Slide';

export const ForkSlide = () => (
  <Slide>
    <Title as="h2" icon={CgGitFork}>
      Forks
    </Title>
    =
    <br />
    When a project's community splits and start developing it independently.
    <br />
    A fork is possible because open source gives the right to:
    <br />
    <ul>
      <li>Copy the code</li>
      <li>Modify it</li>
      <li>Redistribute it</li>
    </ul>
  </Slide>
);
