import React from 'react';
import styled from 'styled-components';

const StyledSubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  cursor: pointer;
  padding: 10px 20vw;
  background-color: #f6f6f6;

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
  const productType = props.match.params.productType;

  return (
    <StyledSubNav>
      {props.data[productType].map(data => (
        <div>
          <img src={data.imgLink} alt={data.name} />
          <div className="category-name">{data.name}</div>
          {data.specs && <div className="specs">{data.specs}</div>}
          {data.new && <div className="red">New</div>}
        </div>
      ))}
    </StyledSubNav>
  );
}
