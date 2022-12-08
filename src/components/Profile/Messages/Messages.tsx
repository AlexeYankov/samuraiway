import UniversalButton from "../../UniversalComponent/Buttons/UniversalButton";
import BarComponent from "../Components/BarComponent/BarComponent";
import s from "./Messages.module.css";
import img from "../../../pics/Other/Iren.jpg";

const Messages = () => {
  const someFn = () => console.log(2);
  return (
    <section className={s.messagesWrapper}>
      <article className={s.message__texting}>
        <div className={s.message__texting__container}>
          <div className={s.message__texting__container__avatar}>
            <img
              className={s.message__texting__container__icon}
              src={img}
              alt=""
            />
          </div>
          <div className={s.message__texting__window}>
            <span>dwdwd</span>
          </div>
        </div>
        <div className={s.message__texting__container}>
          <div className={s.message__texting__container__avatar}>
            <img
              className={s.message__texting__container__icon}
              src={img}
              alt=""
            />
          </div>
          <div className={s.message__texting__window}>
            <span>dwdwd</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Messages;
