/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}></Avatar>
      </div>
      <div className="bottom">
       <Details Detailinfo={props.tel}> </Details> 
       <Details Detailinfo={props.email}></Details> 
      </div>
    </div>
  );
}

export default Card;
