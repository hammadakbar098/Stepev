import React from "react";
import "./Login.css";
import Hand from "./../../assets/Images/Hand.svg";
import Ellipse1 from "./../../assets/Images/Ellipse 1.svg";
import Ellipse2 from "./../../assets/Images/Ellipse 2.svg";
const Login = () => {
  return (
    <>
      <img className="handIcon" src={Hand} alt="A hand wave" />
      <div className="txt">
        <p className="greetTxt">Welcome Admin!</p>
        <p className="loginTxt">Please login to continue</p>
      </div>
      <div className="form">
        <form>
          <input
            className="form-box"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="form-box"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <a href="/" className="formBtn">
            <p>Login</p>
          </a>
          <a href="/" className="forgetBtn">
            <p>Forget Password?</p>
          </a>
        </form>
      </div>
      <div className="ellipses">
        <img
          className="roundImg elipse1"
          src={Ellipse1}
          alt="A round Ellipse"
        />
        <img
          className="roundImg elipse2"
          src={Ellipse2}
          alt="A round Ellipse"
        />
      </div>
      <p className="loginFooter">Copyright stepEV 2022</p>
    </>
  );
};

export default Login;
