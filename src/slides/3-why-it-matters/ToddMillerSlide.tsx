import theRegisterSudo from '../../assets/theregister-sudo.png';
import toddMillerResume from '../../assets/todd-miller-resume.png';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

export const ToddMillerSlide = () => (
  <Slide>
    <Slide>
      <pre>
        <code data-trim data-noescape className="language-shell">
          $ sudo apt update
        </code>
      </pre>
    </Slide>
    <Slide>
      <img src={theRegisterSudo} width="700px" />
      <Attribution>https://www.theregister.com/2026/02/03/sudo_maintainer_asks_for_help/</Attribution>
      <br />
      <div className="fragment">
        <img src={toddMillerResume} width="600px" />
        <Attribution>Todd C. Miller</Attribution>
        <Attribution>https://www.millert.dev/resume/resume.pdf</Attribution>
      </div>
    </Slide>
  </Slide>
);
