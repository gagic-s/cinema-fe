/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import user from "../../../assets/user.jpg";
import style from "./UserInfo.module.css";

const UserInfo = ({ onLogout }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className={style.userInfo}>
      <span className={style.userName}>Hi, Andjela Bolta</span>
      <div className={style.userInfoHeader} onClick={toggleDropdown}>
        <img src={user} alt="User Profile" className={style.userAvatar} />
      </div>

      {isDropdownOpen && (
        <div className={style.dropdownMenu}>
          <ul>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li onClick={handleLogout} className={style.logout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
