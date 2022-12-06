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
            <svg
              style={{marginLeft: '10px'}}
              fill="gray"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z" />
            </svg>
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
