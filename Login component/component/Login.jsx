/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Input from "./input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.logedin === false && <Input type="password" placeholder=" Confirm Password" />}
      <button type="submit">{props.logedin? "Login ":"Regester "}</button>
    </form>
  );
}

export default Login;
