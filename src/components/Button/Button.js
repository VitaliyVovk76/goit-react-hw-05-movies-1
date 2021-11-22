import PropTypes from "prop-types";
import styles from "./Button.module.css";
export default function Button({ onClick, location }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {location?.state?.from?.label ?? "Назад"}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
