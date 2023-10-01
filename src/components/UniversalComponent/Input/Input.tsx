import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Input.module.scss";
import { validation } from "./validation";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type InputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: boolean;
  spanClassName?: string;
  className?: string;
  errorMessage?: string;
  type: string;
  placeHolder?: string;
  setError: (value: boolean) => void;
};

type finalErrorType = {
  Day: boolean | undefined;
  Year: boolean | undefined;
};

const Input: React.FC<InputTextPropsType> = ({
  type,
  // onChange,
  onChangeText,
  // onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,
  errorMessage,
  value,
  placeHolder,
  setError,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [localState, setLocalState] = useState("");
  let hasValue = localState ? s.placeHolderOnTop : s.placeHolder;
 

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
    setLocalState(e.currentTarget.value);
    validation(e.currentTarget.value, placeHolder, setError)
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    // onKeyPress && onKeyPress(e);

    onEnter && e.key === "Enter" && onEnter();
  };

  const finalInputClassName = `${className} ${error ? s.errorInput : s.superInput}`;
  return (
    <div className={!localState ? s.container : s.containerWithData}>
      <input
        type={type}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        value={localState}
        id={uuidv4()}
        {...restProps}
      />
      <span className={hasValue}>{placeHolder}</span>
    </div>
  );
};

export default Input;
