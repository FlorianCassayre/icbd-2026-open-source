import githubProfileEmpty from '../../assets/github-profile-empty.png';
import githubProfileFull from '../../assets/github-profile-full.png';
import { Slide } from '../../Slide';

export const GitHubProfileSlide = () => (
  <Slide>
    <img src={githubProfileEmpty} width="80%" />
    <h3 className="fragment">VS</h3>
    <img src={githubProfileFull} width="80%" className="fragment" />
  </Slide>
);
