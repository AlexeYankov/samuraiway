import s from "../../../App.module.css";
import t from "./Settings.module.scss";
import f from "../../UniversalComponent/Input/Input.module.scss";
import { SettingsContainer } from "./SettingsContainer";
import Input from "../../UniversalComponent/Input/Input";
import { useState } from "react";
import { Select } from "../../UniversalComponent/Select/Select";

const Settings = () => {
  const [errorDay, setErrorDay] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [errorCity, seterrorCity] = useState(false);
  const [job, setJob] = useState(false);
  console.log(errorCity);
  const finalError = errorYear || errorDay;

  return (
    <section className={s.profileAppWrapper}>
      <div className={t.wrapper}>
        <h2>About</h2>
        <div className={t.container}>
          <span>Date of Birth</span>
          <div className={t.birthdayWrapper}>
            <Input className={t.InputContainer + " " + t.DayWidth} setError={setErrorDay} type={"number"} placeHolder="Day" error={finalError} />
            <Select />
            <Input className={t.InputContainer + " " + t.YearWidth} setError={setErrorYear} type={"number"} placeHolder="Year" error={finalError} />
            {finalError && <span className={`${t.bithdayInputSpan} ${f.error}`}>{"Введите действительную дату рождения."}</span>}
          </div>
        </div>

        <div className={t.container}>
          <span>City</span>
          <div className={t.birthdayWrapper}>
            <Input className={t.InputContainer + " " + t.CityWidth} setError={seterrorCity} type={"text"} placeHolder="City" error={errorCity} />
            {errorCity && <span className={`${t.bithdayInputSpan} ${f.error}`}>{"Значение менее 100 символов и более 3, без спец символов."}</span>}
          </div>
        </div>

        <div className={t.container}>
          <span>Job</span>
          <div className={t.birthdayWrapper}>
            <Input className={t.InputContainer + " " + t.CityWidth} setError={seterrorCity} type={"text"} placeHolder="Job place" error={errorCity} />
            {errorCity && <span className={`${t.bithdayInputSpan} ${f.error}`}>{"Значение менее 100 символов и более 3, без спец символов."}</span>}
          </div>
        </div>

        <div className={t.container}>
          <span>Home page</span>
          <div className={t.birthdayWrapper}>
            <Input className={t.InputContainer + " " + t.CityWidth} setError={seterrorCity} type={"text"} placeHolder="home page" error={errorCity} />
            {errorCity && <span className={`${t.bithdayInputSpan} ${f.error}`}>{"Значение менее 100 символов и более 3, без спец символов."}</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
