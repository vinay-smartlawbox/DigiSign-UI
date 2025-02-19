// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import logo from "../../assets/logo.svg";
// import { Image, Form, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import "../../styles/Login.scss";

// const VerifyAccount = () => {
//     const [formData, setFormData] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         password: "",
//     });
//     // State to track if the button should be disabled
//     const [showAccountBlock, setShowAccountBlock] = useState(true);
//     const [showAccount, setShowAccount] = useState(true);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showVerifyEmail, setShowVerifyEmail] = useState(false);
//     const [showConfirmEmail, setShowConfirmEmail] = useState(false);
//     const [showProfile, setShowProfile] = useState(false);
//     const { search } = useLocation();

//     const oobCode = new URLSearchParams(search).get("oobCode");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };
//     const nextBtn = () => {
//         console.log("show block");
//         setShowPassword(true);
//         setShowAccount(false);
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("hitting api");
//         try {
//             const response = await axios.post(
//                 "https://smartbox-backend-1001466762095.us-central1.run.app/auth/signup",
//                 formData);
//             console.log("Data submitted successfully", response);
//             if (response.status === 200) {
//                 setShowAccountBlock(false);
//                 setShowPassword(false);
//                 setShowVerifyEmail(true);
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 422) {
//                 console.error("422 Please check form data");
//             }
//             if (error.response && error.response.status === 405) {
//                 console.error("405 Error: Method Not Allowed");
//             } else {
//                 console.error("Error:", error.message);
//             }
//         }
//     };

//     const confirmEmail = async () => {
//         setShowAccountBlock(false);
//         let sanitizedEmail = formData.email.replace(/:/g, ""); // Remove all colons in email

//         if (
//             !sanitizedEmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
//         ) {
//             console.error("Invalid email format.");
//             return;
//         }
//         const emailFormData = new FormData();
//         emailFormData.append("email", sanitizedEmail);
//         try {
//             if (oobCode) {
//                 const response = await axios.post(
//                     "https://smartbox-backend-1001466762095.us-central1.run.app/auth/confirm-email-verification",
//                     emailFormData);
//                 console.log("Confirmed Email successfully", response);
//                 if (response.status === 200) {
//                     setShowConfirmEmail(true);
//                     setShowVerifyEmail(false);
//                 }
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 422) {
//                 setShowProfile(true);
//             }
//             if (error.response && error.response.status === 405) {
//                 console.error("405 Error: Method Not Allowed");
//             } else {
//                 console.error("Error:", error.message);
//             }
//         }
//     };
//     return (
//         <>
//             <div className="banner-block">
//                 <Container>
//                     <Row className="align-items-center justify-content-center">
//                         <Col md={{ span: 6 }} className="pr-lg-4">
//                             <div className="d-none d-md-block">
//                                 <h1 className="text-center mb-4 fnt-24 fnt-bold">
//                                     All in one platform for your law needs.
//                                 </h1>                <p className="fnt-16">
//                                     Work securely and efficiently from anywhere with legal system                  which you provide smooth and hassle free experience of law.
//                                                 </p>                <div className="banner-</p></h1></div></Col></Row></Container></div ></>

// export default VerifyAccount;
