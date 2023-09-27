import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --story-border: 1px var(--color-gray-300) solid;
  --story-margin: 16px;

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
    ;
    gap: 48px 0;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-areas: 
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
    ;
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--story-margin);
    border-right: var(--story-border);
    margin-right: var(--story-margin);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.desktopAndUp} {
    padding-right: var(--story-margin);
    border-right: var(--story-border);
    margin-right: var(--story-margin);
    margin-bottom: var(--story-margin);
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: var(--story-margin);
    margin-bottom: var(--story-margin);
    border-bottom: var(--story-border);
  }
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  flex: 1;

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: 0;
    }
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.desktopAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    padding-top: var(--story-margin);
    border-top: var(--story-border);
  }
`;

export default MainStoryGrid;
