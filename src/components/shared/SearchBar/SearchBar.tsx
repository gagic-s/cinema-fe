import { useState } from "react";
import style from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value); // Update the search query in context
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue); // Ensure search is triggered on submit
  };

  return (
    <form className={style.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
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
