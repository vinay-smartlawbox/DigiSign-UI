import React from "react";

const LawFirm = () => {
  const styles = {
    iconBg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "7.2px",
      backgroundColor: "#FFEBE3",
      width: "40px",
      height: "40px",
      flexShrink: "0",
    },
  };
  return (
    <div style={styles.iconBg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 28 29"
        fill="none"
      >
        <path
          d="M12.1054 12.1053C14.8959 12.1053 17.158 9.84312 17.158 7.05263C17.158 4.26214 14.8959 2 12.1054 2C9.31487 2 7.05273 4.26214 7.05273 7.05263C7.05273 9.84312 9.31487 12.1053 12.1054 12.1053Z"
          stroke="#FF9871"
          stroke-width="2.5"
        />
        <path
          d="M25.9999 12.1049H23.4736M23.4736 12.1049H20.9473M23.4736 12.1049V9.57861M23.4736 12.1049V14.6312"
          stroke="#FF9871"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          d="M22.2074 22.2103C22.2105 22.0029 22.2105 21.7922 22.2105 21.5787C22.2105 18.4394 17.6863 15.8945 12.1053 15.8945C6.52427 15.8945 2 18.4394 2 21.5787C2 24.7181 2 27.2629 12.1053 27.2629C14.9234 27.2629 16.9555 27.065 18.421 26.7114"
          stroke="#FF9871"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default LawFirm;
