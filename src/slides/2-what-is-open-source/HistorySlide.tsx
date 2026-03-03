import * as React from 'react';

import githubLogo from '../../assets/github-logo.png';
import gnuLogo from '../../assets/gnu-logo.svg';
import linuxLogo from '../../assets/linux-logo.svg';
import osiLogo from '../../assets/osi-logo.svg';
import unixPlate from '../../assets/unix-plate.jpg';
import windows1 from '../../assets/windows-1.jpg';
import wwwLogo from '../../assets/www-logo.svg';
import { Attribution } from '../../components/Attribution';
import { Slide } from '../../Slide';

interface TimelineListProps {
  children: React.ReactNode;
}

const TimelineList: React.FC<TimelineListProps> = ({ children }) => (
  <ul
    style={{
      listStyle: 'none',
      paddingLeft: '20px',
      position: 'relative',
      margin: 0,
    }}
  >
    <span
      style={{
        position: 'absolute',
        left: '6px',
        top: 0,
        bottom: 0,
        width: '2px',
        background: '#606060',
      }}
    />
    {children}
  </ul>
);

interface TimelineListItemProps {
  index: number;
  year: string;
  children: React.ReactNode;
}

const TimelineListItem: React.FC<TimelineListItemProps> = ({ index, year, children }) => (
  <li
    className="fragment fade-in-then-semi-out"
    data-fragment-index={index}
    style={{
      position: 'relative',
      paddingLeft: '20px',
      marginBottom: '20px',
    }}
  >
    <span className="fancy">{year}</span>
    {' - '}
    {children}
  </li>
);

export const HistorySlide = () => (
  <Slide>
    <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
      <div style={{ fontSize: '1.5rem', width: '500px' }}>
        <TimelineList>
          <TimelineListItem index={1} year="1960s">
            Software tied to hardware
          </TimelineListItem>
          <TimelineListItem index={2} year="1970s">
            Software as a product
          </TimelineListItem>
          <TimelineListItem index={3} year="1980s">
            Free software movement
          </TimelineListItem>
          <TimelineListItem index={4} year="1990s">
            Linux distributions
          </TimelineListItem>
          <TimelineListItem index={5} year="2000s">
            Rise of the Web
          </TimelineListItem>
          <TimelineListItem index={6} year="2010s">
            Web 2.0 era
          </TimelineListItem>
          <TimelineListItem index={7} year="2020s">
            Cloud and AI
          </TimelineListItem>
        </TimelineList>
      </div>
      <div className="r-stack" style={{ fontSize: '1rem', color: '#606060' }}>
        <div className="fragment fade-in-then-out" data-fragment-index="1">
          <ul>
            <li>
              1966: <strong>ARPANET</strong>, the foundation of today's internet
            </li>
            <li>
              1969: <strong>UNIX</strong> operating system (Bell Labs)
            </li>
            <li>Mainframe systems (bundled software+hardware), e.g. IBM</li>
          </ul>
          <img src={unixPlate} width="300px" />
          <Attribution>Carlo Nardone, CC BY-SA 2.0</Attribution>
        </div>
        <div className="fragment fade-in-then-out" data-fragment-index="2">
          <ul>
            <li>
              1975: <strong>Microsoft</strong> founded
            </li>
            <li>Rise of proprietary licensing models</li>
          </ul>
          <img src={windows1} width="300px" />
          <Attribution>Rama & Musée Bolo, CeCILL</Attribution>
        </div>
        <div className="fragment fade-in-then-out" data-fragment-index="3">
          <ul>
            <li>
              1983: <strong>Richard Stallman</strong> launches the <strong>GNU</strong> project
            </li>
            <li>
              1985: Creation of the <strong>Free Software Foundation</strong>
            </li>
            <li>
              1989: <strong>GNU public license</strong>
            </li>
          </ul>
          <img src={gnuLogo} width="150px" />
          <Attribution>Aurelio A. Heckert, GFDL 1.3</Attribution>
        </div>
        <div className="fragment fade-in-then-out" data-fragment-index="4">
          <ul>
            <li>
              1991: <strong>Linus Torvalds</strong> releases the <strong>Linux kernel</strong>
            </li>
            <li>
              1993: <strong>Tim Berners Lee</strong> releases the <strong>World Wide Web</strong> to the public domain
            </li>
            <li>
              1993: <strong>Debian</strong> distribution
            </li>
            <li>
              1994: <strong>RedHat</strong> distribution
            </li>
            <li>
              1996: <strong>PostreSQL</strong> database
            </li>
          </ul>
          <img src={wwwLogo} width="150px" />
          <img src={linuxLogo} width="150px" />
          <Attribution>Robert Cailliau, Larry Ewing, public domain</Attribution>
        </div>
        <div className="fragment fade-in-then-out" data-fragment-index="5">
          <div>
            <ul>
              <li>
                1998: <strong>Open Source Initiative</strong> is founded
              </li>
              <li>
                1999: <strong>Apache Software Foundation</strong> is founded
              </li>
              <li>
                2003: <strong>Mozilla</strong> is founded, <strong>Firefox</strong> is created
              </li>
              <li>
                2005: <strong>Linus Torvalds</strong> (again!) authors <strong>git</strong>
              </li>
              <li>
                2008: <strong>GitHub</strong> is created
              </li>
              <li>
                2009: <strong>Node.js</strong> is created
              </li>
            </ul>
          </div>
          <img src={osiLogo} width="150px" />
          <Attribution>Colin Viebrock, CC BY 2.5</Attribution>
        </div>
        <div className="fragment fade-in-then-out" data-fragment-index="6">
          <div>
            <ul>
              <li>
                2011: <strong>GitLab</strong> is created
              </li>
              <li>
                2013: <strong>Docker</strong> is created
              </li>
              <li>
                2013: <strong>React</strong> is open-sourced by Facebook
              </li>
              <li>
                2014: <strong>Kubernetes</strong> is created by Google
              </li>
              <li>
                2015: <strong>Tensorflow</strong> is open-sourced by Google
              </li>
              <li>2018: Microsoft acquires GitHub</li>
            </ul>
          </div>
          <img src={githubLogo} width="150px" />
        </div>
        <div className="fragment fade-in-then-out" data-fragment-index="7">
          <div>
            <ul>
              <li>Extensive relicensing (Elastic, Redis, MongoDB, HashiCorp, Akka)</li>
              <li>"Open-cores" trend</li>
              <li>2022: OpenAI releases ChatGPT (closed-source!)</li>
              <li>
                2023: <strong>LLaMA</strong> is open-sourced by Meta
              </li>
              <li>Massive scraping of open source software to feed AI</li>
              <li>"Open-weights" models</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Slide>
);
