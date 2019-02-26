import React from 'react';

export default function SubLinks(props) {
  return (
    <div>
      <img src={props.imgLink} alt={props.imgName} />;<div>{props.name}</div>
      {props.new && <div>New</div>}
    </div>
  );
}
