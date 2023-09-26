import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const NavigationGroup = ({ className }) => {
  return (
    <div className={ className }>
      <ActionGroup>
        <button>
          <Search size={24} />
        </button>
        <button>
          <Menu size={24} />
        </button>
      </ActionGroup>
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <NavigationGroup />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopNavigationGroup />
        <Logo />
        <DesktopLoginWrapper>
          <Button>Subscribe</Button>
          <DesktopLoginLink>Already a subscriber?</DesktopLoginLink>
        </DesktopLoginWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media(${QUERIES.desktopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media(${QUERIES.desktopAndUp}) {
    justify-content: space-between;
  }
`;

const DesktopNavigationGroup = styled(NavigationGroup)`
  display: none;

  @media(${QUERIES.desktopAndUp}) {
    display: revert;
  }
`;

const DesktopLoginWrapper = styled.div`
  display: none;

  @media(${QUERIES.desktopAndUp}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;


    /* Move element downward for optical alignment */
    margin-top: 4px;
  }
`;

const DesktopLoginLink = styled.a`
  font-size: 0.875rem;
  color: ${COLORS.gray[900]};
  text-decoration: underline;
  font-style: italic;
`;


export default Header;
