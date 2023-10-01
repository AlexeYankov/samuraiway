import s from "./Messages.module.css";
import img from "../../../pics/Other/Iren.jpg";

type MessagesType = {
  theme: string;
};

const Messages = ({ theme }: MessagesType) => {
  const someFn = () => console.log(2);
  const someFn1 = (evt: any) => {
    evt.stopPropagation();
  };
  return (
    <section className={theme === "White" ? s.messagesWrapper : ""}>
      <article className={s.message__texting}>
        <div className={theme === "White" ? s.message__texting__container : s.message__texting__container__black} onClick={someFn}>
          <button className={s.message__texting__container__avatar} onClick={(e) => someFn1(e)}>
            <img className={s.message__texting__container__icon} src={img} alt="" />
          </button>
          <div className={s.message__texting__window}>
            <span>spandwdwdsssssssdwdwdssssssdwdwdsssssssssssssdwdwdssssssdwdwdsssssss</span>
          </div>
        </div>
        <div className={theme === "White" ? s.message__texting__container : s.message__texting__container__black} onClick={someFn}>
          <button className={s.message__texting__container__avatar} onClick={(e) => someFn1(e)}>
            <img className={s.message__texting__container__icon} src={img} alt="" />
          </button>
          <div className={s.message__texting__window}>
            <span>dwdsdwddwdwddwdwddwdwddwdwd</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Messages;
