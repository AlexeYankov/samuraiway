import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Select.module.scss";
import SomeSVGComponent from "../SVGComponent/SomeSVGComponent";

const values = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const Month = "Month";
const iconProps =
  "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z";

export const Select = () => {
  const [value, setValue] = useState("");
  const [opppen, setoppen] = useState(false);

  const closebtn = (e: Event) => {
    // const a = document.querySelector(`${selectID}`);
    // const h = document.getElementById(selectID);
    // console.log(e.target, a)
    // ! useRef or emulate React event toggle 'main' ?? not working onBlur on others components
    if (!opppen) {
      console.log(2);
      document.querySelector("main")?.removeEventListener("click", closebtn);
      setoppen(true);
    }
  };
  const mouseEvent = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === selectID) {
      console.log(1);
      document.querySelector("main")?.addEventListener("click", closebtn);
    }
    setoppen(!opppen);
  };
  const monthRender = value ? <SomeSVGComponent fill={"black"} propsPath={iconProps} width={14} /> : "";

  const selectID = "select" + uuidv4();
  const mappedValues = values.map((el) => {
    const setNewValue = (el: string) => {
      console.log(el);
      setValue(el);
      setoppen(false);
      document.querySelector("main")?.removeEventListener("click", closebtn);
    };
    return el !== value ? (
      <div className={s.option} key={uuidv4()} onClick={() => setNewValue(el)}>
        <span>{el}</span>
      </div>
    ) : (
      <div className={s.optionActive} key={uuidv4()} onClick={() => setNewValue(el)}>
        <span>{el}</span>
        {/* {value === el && <img src="" alt="" />} */}
      </div>
    );
  });

  return (
    <div className={s.container1} id={selectID}>
      <div className={opppen ? s.wrapper + " " + s.active : s.wrapper} id={selectID} onClick={(e) => mouseEvent(e)}>
        <div className={s.select}>
          {value}
          {monthRender}
          {value && <span className={s.fieldName}>{Month}</span>}
          {!value && <span className={opppen ? s.fieldName : s.fieldNameStartPosition}>{Month}</span>}
        </div>
      </div>
      {opppen && <div className={s.selectContainer}>{mappedValues}</div>}
    </div>
  );
};
