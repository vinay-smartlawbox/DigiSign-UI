import React from "react";

const NonBillable = () => {
  const styles = {
    iconBg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "7.2px",
      backgroundColor: "#FFF3D6",
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
        height="30"
        viewBox="0 0 28 30"
        fill="none"
      >
        <path
          d="M16.6673 9.99904L11.334 15.3323M11.334 9.99902L16.6673 15.3323"
          stroke="#FEC53D"
          stroke-width="2.3"
          stroke-linecap="round"
        />
        <path
          d="M8 20H10M20 20H14"
          stroke="#FEC53D"
          stroke-width="2.3"
          stroke-linecap="round"
        />
        <path
          d="M26 8.66667V7.82675C26 6.23607 26 5.44073 25.7893 4.79928C25.39 3.58292 24.4624 2.62795 23.2808 2.21681C22.6577 2 21.8852 2 20.34 2H7.66003C6.11485 2 5.34228 2 4.71919 2.21681C3.53763 2.62795 2.60997 3.58292 2.2106 4.79928C2 5.44073 2 6.23607 2 7.82675V19.3333M26 14V26.4989C26 27.6432 24.6867 28.2504 23.8559 27.4901C23.3677 27.0435 22.6323 27.0435 22.1441 27.4901L21.5 28.0796C20.6445 28.8624 19.3555 28.8624 18.5 28.0796C17.6445 27.2968 16.3555 27.2968 15.5 28.0796C14.6445 28.8624 13.3555 28.8624 12.5 28.0796C11.6445 27.2968 10.3555 27.2968 9.5 28.0796C8.64455 28.8624 7.35545 28.8624 6.5 28.0796L5.85587 27.4901C5.36777 27.0435 4.63223 27.0435 4.14413 27.4901C3.31333 28.2504 2 27.6432 2 26.4989V24.6667"
          stroke="#FEC53D"
          stroke-width="2.3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default NonBillable;
