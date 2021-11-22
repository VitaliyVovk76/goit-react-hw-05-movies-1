import styles from "./Button.module.css";
export default function Button({ onClick, location }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {location?.state?.from?.label ?? "Назад"}
    </button>
  );
}
