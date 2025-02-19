import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  Image,
  Form,
  InputGroup,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import LoginBanner from "./LoginBanner";
import "../../styles/Login.scss";

const CreateAccount = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  // State to track if the button should be disabled
  const [showAccountBlock, setShowAccountBlock] = useState(true);
  const [showAccount, setShowAccount] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { search } = useLocation();
  const oobCode = new URLSearchParams(search).get("oobCode");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const nextBtn = () => {
    console.log("show block");
    setShowPassword(true);
    setShowAccount(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hitting api");
    try {
      const response = await axios.post(
        "https://smartbox-backend-1001466762095.us-central1.run.app/auth/signup",
        formData
      );
      console.log("Data submitted successfully", response);
      if (response.status === 200) {
        setShowAccountBlock(false);
        setShowPassword(false);
        setShowVerifyEmail(true);
      }
    } catch (error) {
      // setShowAccountBlock(false);
      // setShowPassword(false);
      // setShowVerifyEmail(true);
      if (error.response && error.response.status === 422) {
        // setShowAccountBlock(false);
        // setShowPassword(false);
        // setShowVerifyEmail(true);
        console.error("422 Please check form data");
      }
      if (error.response && error.response.status === 405) {
        console.error("405 Error: Method Not Allowed");
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  // useEffect(() => {
  //   if (oobCode) {
  //     verifyEmail(oobCode);
  //   } else {
  //     setMessage('Invalid or missing verification code.');
  //     setLoading(false);
  //   }
  // }, [oobCode]);

  const confirmEmail = async () => {
    setShowAccountBlock(false);
    let sanitizedEmail = formData.email.replace(/:/g, ""); // Remove all colons in email
    // Check if the email is valid before proceeding
    if (
      !sanitizedEmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
      console.error("Invalid email format.");
      return;
    }
    const emailFormData = new FormData();
    emailFormData.append("email", sanitizedEmail);
    try {
      if (oobCode) {
        const response = await axios.post(
          "https://smartbox-backend-1001466762095.us-central1.run.app/auth/confirm-email-verification",
          emailFormData
        );
        console.log("Confirmed Email successfully", response);
        if (response.status === 200) {
          setShowConfirmEmail(true);
          setShowVerifyEmail(false);
        }
        // try {
        //   const response = await axios.post('https://smartbox-backend-1001466762095.us-central1.run.app/auth/send-email-verification', emailFormData);
        //   console.log('Email Sent successfully', response);
        //   if (response.status === 200) {
        //     setShowVerifyEmail(true);
        //     setShowConfirmEmail(false);
        //   }
        // } catch (error) {
        //   console.error(error);
        // }
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // setShowAccountBlock(false);
        // setShowVerifyEmail(false);
        setShowProfile(true);
        // console.error('405 Error: Method Not Allowed');
      }
      if (error.response && error.response.status === 405) {
        console.error("405 Error: Method Not Allowed");
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  return (
    <>
      <div className="login-block">
        <LoginBanner />
        <div className="input-block">
          <div className="input-login-container">
            <img className="login-logo" src={logo} alt="Logo" />
            <p className="login-welcome-text">Welcome👋</p>
            <h5 className="login-title-text">Create your account</h5>

            {showAccount && (
              <>
                <div>
                  <label className="login-label label-bold">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="login-field"
                    type="text"
                    placeholder="Enter name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <label className="login-label label-bold">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="login-field"
                    type="text"
                    placeholder="Enter last name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="text-center" onClick={nextBtn}>
                  <Button
                    className="button-primary"
                    variant="primary"
                    type="button"
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            {showPassword && (
              <>
                <div>
                  <label className="login-label label-bold">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="login-field"
                    type="email"
                    placeholder="Please enter your email"
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <label className="login-label label-bold">
                    Mobile Number
                  </label>
                  <InputGroup>
                    <InputGroup.Text>+01</InputGroup.Text>
                    <input
                      className="login-field"
                      type="tel"
                      placeholder="Enter Mobile Number"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange(e)}
                    />
                  </InputGroup>
                </div>
                <div>
                  <label className="login-label label-bold">Password</label>
                  <input
                    className="login-field"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <label className="login-label label-bold">
                    Confirm Password
                  </label>
                  <input
                    className="login-field"
                    type="password"
                    placeholder="Confirm Password"
                    name="formConfirmPassword"
                  />
                </div>
                <div className="text-center" onClick={handleSubmit}>
                  <Button
                    className="button-primary"
                    variant="primary"
                    type="submit"
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            <p className="separator ">
              <span>OR</span>
            </p>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="login-alt mt-2 ps-4 d-flex align-items-center justify-content-center">
                <h6 className="color-primary fnt-14 fnt-bold mb-0 pr-3">
                  Create account using
                </h6>
                <button className="ps-3">
                  <Image src="assets/Gmail.png" alt="loginImg" fluid />
                </button>
              </div>
              <div className="login mt-2 mt-md-4">
                <span className="color-lightGray fnt-14">
                  Already registered?
                </span>
                <a href="/login" className="brand-color fnt-16 ml-10 fnt-bld">
                  Login Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
