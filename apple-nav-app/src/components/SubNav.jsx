import React from 'react';
import styled from 'styled-components';

const StyledSubLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  img {
    height: 50px;
  }
  div {
    font-size: 0.7rem;
    text-align: center;
    padding-top: 5px;
  }
  .red {
    color: red;
    font-size: 0.6rem;
  }
  .specs {
    font-size: 0.6rem;
    color: black;
  }

  .category-name {
    &:hover {
      color: #0071c8;
    }
  }
`;

export default function SubLinks(props) {
  return (
    <StyledSubLink>
      <img src={props.imgLink} alt={props.name} />
      <div className="category-name">{props.name}</div>
      {props.specs && <div className="specs">{props.specs}</div>}
      {props.new && <div className="red">New</div>}
    </StyledSubLink>
  );
}
