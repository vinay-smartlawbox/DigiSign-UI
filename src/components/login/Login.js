import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import DigiSign from "../../assets/svg/DigiSign";
import GmailLogo from "../../assets/Gmail.png";
import "../../styles/Login.scss";
import { useNavigate } from "react-router-dom";
import LoginBanner from "./LoginBanner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <>
      <div className="login-block">
        <LoginBanner />
        <div className="input-block">
          <div className="input-login-container">
            <div className="login-logo">
              <DigiSign width="250" height="96" />
            </div>
            <p className="login-welcome-text">Welcome back! 👋</p>
            <h5 className="login-title-text">Login to your account</h5>
            <Form className="login-form-block" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <label className="login-label label-bold">
                  Email ID / Username
                </label>
                <input
                  className="login-field"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <label className="login-label label-bold">Password</label>
                <input
                  className="login-field"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="login-label label-light"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  className="login-check"
                  type="checkbox"
                  label="Remember me"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </Form.Group>
              <div>
                <Button
                  className="button-primary login-button"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
            <div className="alternative-login">
              <div className="forgot-block">
                <a href="" className="forgot-link">
                  Forgot Password?
                </a>
              </div>
              <p className="separator my-3">
                <span>Or</span>
              </p>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="login-alt ps-4 d-flex align-items-center justify-content-center">
                  <h6 className="color-primary fnt-14 fnt-bold mb-0 pr-3">
                    Login using
                  </h6>
                  <button className="ps-3">
                    <img src={GmailLogo} alt="loginImg" />
                  </button>
                </div>
                <div>
                  <span className="color-lightGray fnt-14">
                    Not registered?
                  </span>
                  <a href="" className="brand-color fnt-16 ml-10 fnt-bld">
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
