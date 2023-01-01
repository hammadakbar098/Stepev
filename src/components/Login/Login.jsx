import React from "react";
import "./Login.css";
import Hand from "./../../assets/Images/Hand.svg";
import ellipse from "./../../assets/Images/ellipse.svg";
const Login = () => {
  return (
    <>
      <img className="handWave" src={Hand} alt="Handwave" />
      <div className="textLogin">
        <p className="greetingText">Welcome Admin!</p>
        <p className="loginInfo">Please login to continue</p>
      </div>
      <form className="form">
        <input className="formInput" type="email" placeholder="Email" />
        <input className="formInput" type="password" placeholder="Password" />
        <a href="/" className="btnLogin">
          <p>Login</p>
        </a>
        <a href="/" className="btnForget">
          Forget password?
        </a>
        <p className="copyright">Copyright StepEV 2022</p>
      </form>
      <img className="ellipse" src={ellipse} alt="Ellipse" />
    </>
  );
};

export default Login;
