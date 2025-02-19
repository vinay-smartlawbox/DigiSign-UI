import React from "react";
import help from "../../../assets/notifications.svg";
import userProfile from "../../../assets/user-profile.svg";
import settings from "../../../assets/settings.svg";
import notification from "../../../assets/notification.svg";

const Menu = () => {
  return (
    <>
      <button>
        <img className="menu-icon" src={help} alt="notification" />
      </button>
      <button>
        <img className="menu-icon" src={settings} alt="notification" />
      </button>
      <button>
        <img className="menu-icon" src={notification} alt="notification" />
      </button>
      <button>
        <img
          className="menu-profile-icon"
          src={userProfile}
          alt="notification"
        />
      </button>
    </>
  );
};

export default Menu;
