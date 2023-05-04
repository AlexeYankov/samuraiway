import { HTMLInputTypeAttribute, useState } from "react";
import s from "../LoginForm/LoginForm.module.scss";
import SomeSVGComponent from "../../UniversalComponent/SVGComponent/SomeSVGComponent";

const propsPath =
  "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z";

type InputFromType = {
  value: string;
  type: HTMLInputTypeAttribute;
  formik: any;
  placeHolder: string;
  error: string;
};

const InputForm = ({ value, type, formik, placeHolder, error }: InputFromType) => {
  const [inputType, changeInputType] = useState(type);
  const [iconStyle, changeIconStyle] = useState("black");
  const finalInputStyle = error && formik.touched[value] ? s.loginError : s.loginInput;
  const finalLabelStyle = formik.values[value] ? s.loginLableHidden : s.loginLable;
  const labelStyle = type === "checkbox" ? s.loginCheckbox : finalLabelStyle;
  const inputStyle = type === "checkbox" ? s.loginInputType : finalInputStyle;
  const changeType = () => {
    if (inputType === "password") {
      changeInputType("text");
      changeIconStyle("gray");
    } else {
      changeInputType("password");
      changeIconStyle("black");
    }
  };
  return (
    <div className={s.inputContainer}>
      <div className={s.inputWrapper}>
        <input className={inputStyle} type={inputType} id={value} {...formik.getFieldProps(value)} />
        <label className={labelStyle} htmlFor={value}>
          {placeHolder}
        </label>
        {value === "password" && <SomeSVGComponent propsPath={propsPath} fill={iconStyle} click={changeType} />}
      </div>
      {formik.errors[value] && formik.touched[value] && <div className={s.inputError}>{formik.errors[value]}</div>}
    </div>
  );
};

export default InputForm;
