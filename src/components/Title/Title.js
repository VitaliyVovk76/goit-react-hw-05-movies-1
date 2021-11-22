import s from "./Title.module.css";

function Title({ title }) {
  return (
    <div>
      <h1 className={s.title}>{title}</h1>
    </div>
  );
}

export default Title;
