import { useState } from "react";
import { ImSearch } from "react-icons/im";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  //записываем в state запрос
  const hendleQueryChange = (event) => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };
  //делаем проверку на пустоту запроса, передаем значение state в Арр и чистим state
  const hendleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      alert("Input query");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className={s.searchBar}>
      <form className={s.searchForm} onSubmit={hendleSubmit}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>
            <ImSearch />
          </span>
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={hendleQueryChange}
          value={searchQuery}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
