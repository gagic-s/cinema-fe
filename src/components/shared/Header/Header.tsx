import HomeButton from "../HomeButton/HomeButton";
import SearchBar from "../SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.headerContainer}>
      <HomeButton />
      <SearchBar />
      <UserInfo />
    </header>
  );
};

export default Header;
