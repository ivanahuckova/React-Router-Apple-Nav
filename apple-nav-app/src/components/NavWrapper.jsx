import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import NavbarLink from './NavbarLink';

const StyledNavWrapper = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #313131;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default function NavWrapper() {
  return (
    <StyledNavWrapper>
      <Icon src={'http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg'} alt={'Apple Logo'} />
      <NavbarLink linkName={'Mac'} />
      <NavbarLink linkName={'iPad'} />
      <NavbarLink linkName={'iPhone'} />
      <NavbarLink linkName={'Watch'} />
      <NavbarLink linkName={'TV'} />
      <NavbarLink linkName={'Music'} />
      <NavbarLink linkName={'Support'} />
      <Icon
        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'}
        alt={'Search Icon'}
      />
      <Icon src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2000px-VisualEditor_-_Icon_-_Close_-_white.svg.png'} alt={'Shop Icon'} />
    </StyledNavWrapper>
  );
}
