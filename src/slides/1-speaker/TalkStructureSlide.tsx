import { Slide } from '../../Slide';

export const TalkStructureSlide = () => (
  <Slide>
    <div className="r-stack">
      <h2 className="fragment fade-out">Talk content</h2>
      <ol>
        <li className="fragment fade-in-then-semi-out">What is open source?</li>
        <li className="fragment fade-in-then-semi-out">Why it matters</li>
        <li className="fragment fade-in-then-semi-out">How it works</li>
        <li className="fragment fade-in-then-semi-out">Challenges of modern open source</li>
        <li className="fragment fade-in-then-semi-out">The future?</li>
        <li className="fragment fade-in-then-semi-out">Career pathways and opportunities</li>
      </ol>
    </div>
  </Slide>
);
