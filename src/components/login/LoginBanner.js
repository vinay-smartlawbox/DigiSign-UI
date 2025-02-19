import React from "react";
import loginBanner from "../../assets/Banner.svg";
import "../../styles/Login.scss";

const LoginBanner = () => {
  return (
    <div className="image-block">
      <div className="text-block">
        <h3 className="text1">
          All in one platform for your digital signatures.
        </h3>
        <p className="text2">
          Work securely and efficiently from anywhere with Digi-Sign system
          which will provide smooth and hassle free experience for signature
          management.
        </p>
      </div>
      <img className="image-login" src={loginBanner} alt="BannerImage" />
    </div>
  );
};

export default LoginBanner;
