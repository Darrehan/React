/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
function Emoji(props) {
  return (
    
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    
  );
}
export default Emoji;
