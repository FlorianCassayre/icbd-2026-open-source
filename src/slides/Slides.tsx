import * as React from 'react';
import { Fragment } from 'react';

import { Slide } from '../Slide';
import { FrontSlide } from './0-intro/FrontSlide';
import { PersonalExperienceSlide } from './1-speaker/PersonalExperienceSlide';
import { SpeakerSlide } from './1-speaker/SpeakerSlide';
import { TalkStructureSlide } from './1-speaker/TalkStructureSlide';
import { FreeSoftware } from './2-what-is-open-source/FreeSoftware';
import { HistorySlide } from './2-what-is-open-source/HistorySlide';
import { MisconceptionContributionSlide } from './2-what-is-open-source/MisconceptionContributionSlide';
import { MisconceptionFreeSlide } from './2-what-is-open-source/MisconceptionFreeSlide';
import { MisconceptionOwnershipSlide } from './2-what-is-open-source/MisconceptionOwnershipSlide';
import { MisconceptionQualitySlide } from './2-what-is-open-source/MisconceptionQualitySlide';
import { MisconceptionTitleSlide } from './2-what-is-open-source/MisconceptionTitleSlide';
import { MisconceptionUnsafeSlide } from './2-what-is-open-source/MisconceptionUnsafeSlide';
import { OtherOpenSlide } from './2-what-is-open-source/OtherOpenSlide';
import { PrinciplesSlide } from './2-what-is-open-source/PrinciplesSlide';
import { CernOpenSourceSlide } from './3-why-it-matters/CernOpenSourceSlide';
import { EverywhereSlide } from './3-why-it-matters/EverywhereSlide';
import { FfmpegMarsSlide } from './3-why-it-matters/FfmpegMarsSlide';
import { LeftPadSlide } from './3-why-it-matters/LeftPadSlide';
import { ToddMillerSlide } from './3-why-it-matters/ToddMillerSlide';
import { XkcdDependencySlide } from './3-why-it-matters/XkcdDependencySlide';
import { ChooseALicenseSlide } from './4-how-it-works/ChooseALicenseSlide';
import { ContributionLevelsSlide } from './4-how-it-works/ContributionLevelsSlide';
import { GovernanceModelsSlide } from './4-how-it-works/GovernanceModelsSlide';
import { LicensesShareSlide } from './4-how-it-works/LicensesShareSlide';
import { ParticipateSlide } from './4-how-it-works/ParticipateSlide';
import { RelicensingSlide } from './5-challenges/RelicensingSlide';
import { WhyItWorksSlide } from './5-challenges/WhyItWorksSlide';
import { AiSlide } from './6-future/AiSlide';
import { BusinessModelsSlide } from './6-future/BusinessModelsSlide';
import { CloudSlide } from './6-future/CloudSlide';
import { LichessSlide } from './6-future/LichessSlide';
import { AdoptOpenSourceSlide } from './7-career-pathways/AdoptOpenSourceSlide';
import { GitHubProfileSlide } from './7-career-pathways/GitHubProfileSlide';
import { GitHubProfileStatsSlide } from './7-career-pathways/GitHubProfileStatsSlide';
import { RecruiterSlide } from './7-career-pathways/RecruiterSlide';
import { EndSlide } from './8-outro/EndSlide';

export const Slides: React.FC = () => {
  return (
    <Fragment>
      <SpeakerSlide />
      <FrontSlide />
      <>
        {/* 1. Speaker presentation */}
        <SpeakerSlide />
        <TalkStructureSlide />
      </>
      <>
        {/* 2. What is open source */}
        <PrinciplesSlide />
        <FreeSoftware />
        <OtherOpenSlide />
        <HistorySlide />
        <Slide>
          <MisconceptionTitleSlide />
          <MisconceptionQualitySlide />
          <MisconceptionOwnershipSlide />
          <MisconceptionFreeSlide />
          <MisconceptionUnsafeSlide />
          <MisconceptionContributionSlide />
        </Slide>
      </>
      <>
        {/* 3. Why it matters */}
        <EverywhereSlide />
        <XkcdDependencySlide />
        <ToddMillerSlide />
        <LeftPadSlide />
        <FfmpegMarsSlide />
      </>
      <>
        {/* 4. How it works */}
        <WhyItWorksSlide />
        <GovernanceModelsSlide />
        <LicensesShareSlide />
        <ChooseALicenseSlide />
        <ParticipateSlide />
        <ContributionLevelsSlide />
      </>
      <>
        {/* 5. Challenges of modern open source */}
        <RelicensingSlide />
      </>
      <>
        {/* The future of open source */}
        <CloudSlide />
        <BusinessModelsSlide />
        <LichessSlide />
        <AiSlide />
      </>
      <>
        {/* Career pathways */}
        <PersonalExperienceSlide />
        <CernOpenSourceSlide />
        <GitHubProfileSlide />
        <GitHubProfileStatsSlide />
        <RecruiterSlide />
        <AdoptOpenSourceSlide />
      </>
      <EndSlide />
    </Fragment>
  );
};
