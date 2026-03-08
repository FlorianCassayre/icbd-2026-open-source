import { Slide } from '../../Slide';

export const TalkStructureSlide = () => (
  <Slide>
    <div className="r-stack">
      <h2 className="fragment fade-out" data-fragment-index={1}>
        Talk content
      </h2>
      <ol
        className="fancy"
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          textAlign: 'center',
        }}
      >
        <li className="fragment fade-in-then-semi-out" data-fragment-index={1}>
          What is open source?
        </li>
        <li className="fragment fade-in-then-semi-out">Why it matters</li>
        <li className="fragment fade-in-then-semi-out">How it works</li>
        <li className="fragment fade-in-then-semi-out">Challenges of modern open source</li>
        <li className="fragment fade-in-then-semi-out">The future?</li>
        <li className="fragment fade-in-then-semi-out">Career pathways and opportunities</li>
      </ol>
    </div>
  </Slide>
);
