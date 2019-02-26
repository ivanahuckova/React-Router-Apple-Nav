import React from 'react';
import styled from 'styled-components';

const StyledSubLink = styled.div``;

export default function SubLinks(props) {
  return (
    <StyledSubLink>
      <img src={props.imgLink} alt={props.name} />
      <div>{props.name}</div>
      {props.new && <div>New</div>}
    </StyledSubLink>
  );
}
