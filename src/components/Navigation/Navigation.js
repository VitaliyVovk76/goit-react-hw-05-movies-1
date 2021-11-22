import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ namesAndPathes }) {
  const { pathToHome, pathToMovies, nameOfHome, nameOfMovies } = namesAndPathes;

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <NavLink
            exact
            to={pathToHome}
            className={styles.navigationLink}
            activeClassName={styles.activeLink}
          >
            {nameOfHome}
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to={pathToMovies}
            className={styles.navigationLink}
            activeClassName={styles.activeLink}
          >
            {nameOfMovies}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
