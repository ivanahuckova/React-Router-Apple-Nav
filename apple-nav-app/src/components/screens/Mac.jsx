import React from 'react';
import Sublinks from '../SubLinks';
import data from '../../data';
import styled from 'styled-components';

const StyledSublinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60vw;
  padding: 20px 0;
`;

export default function Mac(props) {
  const macData = data.Mac;
  return (
    <StyledSublinks>
      {macData.map(data => (
        <Sublinks key={data.name} imgLink={data.imgLink} imgName={data.name} name={data.name} new={data.new} />
      ))}
    </StyledSublinks>
  );
}
