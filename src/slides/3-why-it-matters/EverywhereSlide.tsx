import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';
import { range } from '../../util/arrays';

export const EverywhereSlide = () => (
  <Slide>
    {range(2).map(i => (
      <Slide key={i} data-auto-animate>
        <h2 data-id="stat" style={{ marginBottom: 0 }}>
          96%
        </h2>
        {i > 0 && (
          <div>
            <div className="font-medium">
              of <strong>commercial software</strong>
              <br />
              depends on open source software
            </div>
            <br />
            <Attribution>
              https://www.blackduck.com/resources/analyst-reports/open-source-security-risk-analysis.html
            </Attribution>
          </div>
        )}
      </Slide>
    ))}
  </Slide>
);
