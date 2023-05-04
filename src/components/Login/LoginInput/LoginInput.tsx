import s from "../LoginForm/LoginForm.module.scss";
import { useFormik } from "formik";
import InputForm from "./InputForm";
import UniversalButton from "../../UniversalComponent/Buttons/UniversalButton";
import { ValidateType } from "../../../types/types";

const validate = (values: any) => {
  // console.log(1, values);
  const errors = {} as ValidateType;
  if (!values.login) {
    errors.login = "Required";
  } else if (values.login.length >= 70) {
    errors.login = "Must be 70 characters or less";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 4) {
    errors.password = "Must be 5 characters or more";
  }

  return errors;
};

const LoginInput = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={s.container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.loginContainer}>
          <InputForm value="login" type="text" formik={formik} placeHolder="Email or phone number" error={formik.errors.login || ""} />
          <InputForm value="password" type="password" formik={formik} placeHolder="Password" error={formik.errors.password || ""} />
          <InputForm value="rememberMe" type="checkbox" formik={formik} placeHolder="Remember me" error={formik.errors.rememberMe || ""} />

          <div className={s.buttonContainer}>
            <UniversalButton className={s.loginButton} type="submit">
              sign in
            </UniversalButton>

            <strong>or</strong>

            <UniversalButton className={s.loginButton}>create new account</UniversalButton>

            <UniversalButton className={s.loginButton}>forget password</UniversalButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;
