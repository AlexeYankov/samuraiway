import s from "../LoginForm/LoginForm.module.scss";
import { useFormik } from "formik";
import InputForm from "./InputForm";
import UniversalButton from "../../UniversalComponent/Buttons/UniversalButton";
import { ValidateType } from "../../../types/types";
import { useAppDispatch } from "../../../state/store";
import { logInTC } from "../../../state/login/loginReducer";

const validate = (values: ValidateType) => {
  const errors = {} as ValidateType;
  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length >= 70) {
    errors.email = "Must be 70 characters or less";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 4) {
    errors.password = "Must be 5 characters or more";
  }

  return errors;
};

type LoginInputType = {
  page: number;
  theme: string;
};

const LoginInput = ({ page, theme }: LoginInputType) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onSubmit: (values: ValidateType) => {
      dispatch(logInTC(values, page));
    },
  });
  return (
    <div className={theme === "White" ? s.container : s.containerBlack}>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.loginContainer}>
          <InputForm value="email" type="text" formik={formik} placeHolder="Email or phone number" error={formik.errors.email || ""} />
          <InputForm value="password" type="password" formik={formik} placeHolder="Password" error={formik.errors.password || ""} />
          <InputForm value="rememberMe" type="checkbox" formik={formik} placeHolder="Remember me" error={formik.errors.rememberMe || ""} />

          <div className={s.buttonContainer}>
            <UniversalButton className={s.loginButton} type="submit">
              sign in
            </UniversalButton>

            <strong>or</strong>

            <UniversalButton className={s.loginButton}>create new account</UniversalButton>

            <UniversalButton className={s.loginButton}>forgot password</UniversalButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;
