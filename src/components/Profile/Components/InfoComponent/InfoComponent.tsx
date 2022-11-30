import s from "./InfoComponent.module.css";

const InfoComponent = () => {
  const getUserUrl = "Anthony" + "_" + "Soprano";
  return (
    <div className={s.info__container}>
      <div className={s.info__header}>
        <p className={s.info__UserName}>@{getUserUrl}</p>
        <div className={s.info__UserTextContainer}>
          <span className={s.info__UserTextStatus}>
            Can solve any your problem
          </span>
          <span className={s.info__UserOnlineStatus}>
            last seen 19 jun 2013 at 21:51
          </span>
        </div>
      </div>
      <div className={s.info__generalData__container}>
        <div className={s.info__generalData__Birth}>
          <span>Date of Birth:</span>
          <article>
            <span>18/09/1961</span>
          </article>
        </div>
        <div className={s.info__generalData__City}>
          <span>City:</span>
          <article>
            <span>New Jersey</span>
          </article>
        </div>
        <div className={s.info__generalData__Job}>
          <span>Job:</span>
          <article>
            <span>like a dream</span>
          </article>
        </div>
        <div className={s.info__generalData__Job}>
          <span>Homepage:</span>
          <article>
            <span>realDrum-is-life.com</span>
          </article>
        </div>
      </div>
      <div className={s.info__footer}>
        <div className={s.info__footer__container}>
          <a className={s.info__footer__unit} href="">
            <span className={s.info__footer__unit__number}>163</span>
            <span className={s.info__footer__unit__text}>subscribers</span>
          </a>
          <a className={s.info__footer__unit} href="">
            <span className={s.info__footer__unit__number}>488</span>
            <span className={s.info__footer__unit__text}>posts</span>
          </a>
          <a className={s.info__footer__unit} href="">
            <span className={s.info__footer__unit__number}>423</span>
            <span className={s.info__footer__unit__text}>photos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
