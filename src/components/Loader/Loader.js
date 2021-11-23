import Load from "react-loader-spinner";
import s from "../Loader/Loader.module.css";
export default function Loader() {
  return (
    <Load
      classname={s.loader}
      type="Circles"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000}
    />
  );
}
