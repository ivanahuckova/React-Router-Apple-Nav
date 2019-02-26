import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

export default function Icon(props) {
  return (
    <LogoContainer>
      <Image src={props.src} alt={props.alt} />
    </LogoContainer>
  );
}
