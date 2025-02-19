import React from "react";

const Beneficiaries = () => {
  const styles = {
    iconBg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "7.2px",
      backgroundColor: "#E8FFF4",
      width: "40px",
      height: "40px",
      flexShrink: "0",
    },
  };
  return (
    <div style={styles.iconBg}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
      >
        <path
          d="M10.879 1.32442L3.91628 3.93372C2.31162 4.53372 1 6.43139 1 8.14767V18.5151C1 20.1616 2.08839 22.3244 3.41398 23.3151L9.41398 27.7943C11.3815 29.2734 14.6186 29.2734 16.586 27.7943L22.5862 23.3151C23.9118 22.3244 25 20.1616 25 18.5151V8.14767C25 6.43139 23.6884 4.53372 22.0837 3.93372L15.121 1.32442C13.935 0.89186 12.0372 0.89186 10.879 1.32442Z"
          stroke="#2F5C47"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.9858 13.4497C12.93 13.4497 12.8603 13.4497 12.8044 13.4497C11.4928 13.4079 10.4463 12.3195 10.4463 10.9939C10.4463 9.64043 11.5486 8.53809 12.9021 8.53809C14.2556 8.53809 15.3579 9.64043 15.3579 10.9939C15.344 12.3334 14.2975 13.4079 12.9858 13.4497Z"
          stroke="#416A57"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.2078 17.3572C8.86823 18.2502 8.86823 19.7154 10.2078 20.6083C11.7288 21.627 14.2264 21.627 15.7474 20.6083C17.0869 19.7154 17.0869 18.2502 15.7474 17.3572C14.2404 16.3386 11.7427 16.3386 10.2078 17.3572Z"
          stroke="#416A57"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Beneficiaries;
