import s from "../Login.module.scss";

const LoginFooter = () => {
  const text = ["buddy", "2022", "All rights reserved"];
  const mappedText = text.map((text, id) => {
    return (
      <span className={s.mappedText} key={id + Math.random()}>
        {text}
      </span>
    );
  });
  return <div className={s.footer}>{mappedText}</div>;
};

export default LoginFooter;
