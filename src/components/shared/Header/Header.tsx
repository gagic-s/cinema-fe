import HomeButton from "../HomeButton/HomeButton";
import SearchBar from "../SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.headerContainer}>
      <HomeButton />
      <SearchBar />
      <UserInfo />
    </div>
  );
};

export default Header;
