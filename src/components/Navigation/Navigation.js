import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <NavLink
            exact
            to="/"
            className={styles.navigationLink}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to="/movies"
            className={styles.navigationLink}
            activeClassName={styles.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
