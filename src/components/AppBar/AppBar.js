import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export default function Appbar({ children }) {
  const namesAndPathes = {
    pathToHome: "/",
    pathToMovies: "/movies",
    nameOfHome: "Home",
    nameOfMovies: "Movies",
  };
  return (
    <header className={styles.header}>
      <Navigation namesAndPathes={namesAndPathes} />
    </header>
  );
}
