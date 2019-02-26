import React from 'react';
import SubNav from '../SubNav';
import data from '../../data';
import styled from 'styled-components';

const StyledSubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  padding: 20px 20vw;
`;

export default function Ipad(props) {
  const ipadData = data.iPad;
  return (
    <StyledSubNav>
      {ipadData.map(data => (
        <SubNav key={data.name} specs={data.specs} imgLink={data.imgLink} imgName={data.name} name={data.name} new={data.new} />
      ))}
    </StyledSubNav>
  );
}
