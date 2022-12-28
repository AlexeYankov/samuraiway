import s from "../../Profilestyles.module.css";
import SomeSVGComponent from "../../../UniversalComponent/SVGComponent/SomeSVGComponent";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import profileReducer from "../../../../state/profileState/ProfileState";
import { addPostReducer } from "../../../../state/profileState/CRUDState";

type TextAreaType = {
  accept: string;
  closeFn: () => void;
  value: string;
  onChange: (str: string) => void;
  shorts?: boolean;
};

const TextAreaComponent: React.FC<TextAreaType> = ({
  accept,
  closeFn,
  value,
  onChange,
  shorts,
}) => {
  const [files, uploadFiles] = useState(Object);
  const textValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };
  const dispatch = useDispatch()
  const handlerChanged = (e: ChangeEvent<HTMLInputElement>) => {
    uploadFiles(e.target.files);
  };
  const filePicker = (e: any) => {
    e.currentTarget.click();
  };
  console.log(files);
  const shortsJSX = !shorts ? (
    <div>
      <input
        type="file"
        id="uploadFile"
        style={{ display: "none" }}
        onChange={(e) => handlerChanged(e)}
        accept={accept}
        multiple
      />
      <label
        htmlFor="uploadFile"
        id="uploadFile"
        onClick={(e) => filePicker(e)}
      >
        <button>
          <SomeSVGComponent propsPath="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
        </button>
      </label>

      <button>
        <SomeSVGComponent propsPath="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" />
      </button>
      <input
        type="file"
        id="uploadVideo"
        style={{ display: "none" }}
        onChange={(e) => handlerChanged(e)}
        accept={"video/mp4,video/x-m4v,video/*"}
        multiple
      />
      <label
        htmlFor="uploadVideo"
        id="uploadVideo"
        onClick={(e) => filePicker(e)}
      >
        <button>
          <SomeSVGComponent propsPath="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
        </button>
      </label>
    </div>
  ) : (
    <div>
      <input
        type="file"
        id="uploadFile"
        style={{ display: "none" }}
        onChange={(e) => handlerChanged(e)}
        accept={accept}
        multiple
      />
      <label
        htmlFor="uploadFile"
        id="uploadFile"
        onClick={(e) => filePicker(e)}
      >
        <button>
          <SomeSVGComponent propsPath="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" />
        </button>
      </label>
    </div>
  );
  const time = '2'
  const img = '2'
  const music = '2'
  const video = '2'
  return (
    <div className={s.profileInfo__CRUDarea}>
      <textarea className="" onChange={textValue} value={value}></textarea>
      <div className={s.profileInfo__CRUDarea__buttons}>
        <button className={s.profileInfo__CRUDarea__send} 
        onClick={()=> dispatch(addPostReducer(time, value, img, music, video))}>
          <SomeSVGComponent propsPath="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
        </button>
        <div className={s.profileInfo__CRUDarea__content}>{shortsJSX}</div>
        <button className={s.profileInfo__CRUDarea__close} onClick={closeFn}>
          <SomeSVGComponent propsPath="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </button>
      </div>
    </div>
  );
};

export default TextAreaComponent;
