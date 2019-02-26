import React from 'react';
import styled from 'styled-components';

const StyledNavbarLink = styled.div`
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default function NavbarLink(props) {
  return (
    <StyledNavbarLink>
      <div>{props.linkName}</div>
    </StyledNavbarLink>
  );
}
