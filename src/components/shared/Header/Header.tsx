import { useMovies } from "../../../context/MovieContext/MovieContext";
import { useNavigate } from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton";
import SearchBar from "../SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";
import style from "./Header.module.css";
import { useAuth } from "../../../context/AuthContext/AuthContext";

const Header = () => {
  const { setSearchQuery } = useMovies();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className={style.headerContainer}>
      <HomeButton />
      <SearchBar  onSearch={setSearchQuery} />
      <UserInfo onLogout={handleLogout} />
    </header>
  );
};

export default Header;
