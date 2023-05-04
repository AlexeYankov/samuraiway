import s from "./Messages.module.css";
import img from "../../../pics/Other/Iren.jpg";

const Messages = () => {
  const someFn = () => console.log(2);
  const someFn1 = (evt: any) => {
    evt.stopPropagation();
    console.log(3);
  };
  return (
    <section className={s.messagesWrapper}>
      <article className={s.message__texting}>
        <div className={s.message__texting__container} onClick={someFn}>
          <button className={s.message__texting__container__avatar} onClick={(e) => someFn1(e)}>
            <img className={s.message__texting__container__icon} src={img} alt="" />
          </button>
          <div className={s.message__texting__window}>
            <span>spandwdwdssssssdwdwdssssssdwdwdssssssdwdwdssssssdwdwdssssssdwdwdsssssssssssssdwdwdssssssdwdwdsssssss</span>
          </div>
        </div>
        <div className={s.message__texting__container} onClick={someFn}>
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
