import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export default function Appbar({ children }) {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
