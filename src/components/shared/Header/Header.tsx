import { useMovies } from "../../../context/MovieContext";
import HomeButton from "../HomeButton/HomeButton";
import SearchBar from "../SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Header.module.css";

const Header = () => {
  const { setSearchQuery } = useMovies();

  return (
    <header className={style.headerContainer}>
      <HomeButton />
      <SearchBar onSearch={setSearchQuery} />
      <UserInfo />
    </header>
  );
};

export default Header;
