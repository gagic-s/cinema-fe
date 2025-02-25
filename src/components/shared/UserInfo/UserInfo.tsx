import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import user from "../../../assets/user.jpg";
import style from "./UserInfo.module.css";
import { useAuth } from "../../../context/AuthContext/AuthContext";

type UserInfoProps = {
  onLogout: () => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user: authUser } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    onLogout();
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className={style.userInfo} onClickCapture={handleClickOutside}>
      <span className={style.userName}>
        Hi, {authUser ? authUser.name : "Guest"}
      </span>

      <div className={style.userInfoHeader} onClick={toggleDropdown}>
        <img src={user} alt="User Profile" className={style.userAvatar} />
      </div>

      {isDropdownOpen && (
        <div className={style.dropdownMenu} ref={dropdownRef}>
          <ul>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>

            {/* Show "Add Movie" only for Admins */}
            {authUser?.isAdmin && (
              <><li>
                <Link to="/create-movie">Add Movie</Link>
              </li><li>
                  <Link to="/admin">Admin Panel</Link>
                </li></>
            )}

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
