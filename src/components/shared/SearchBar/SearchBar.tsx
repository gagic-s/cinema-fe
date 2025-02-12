/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./SearchBar.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchBar = ({ onSearch }: any) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={style.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className={style.searchInput}
      />
      <button type="submit" className={style.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
