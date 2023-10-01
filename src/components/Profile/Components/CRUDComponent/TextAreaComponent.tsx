import s from "../../Profilestyles.module.css";
import SomeSVGComponent from "../../../UniversalComponent/SVGComponent/SomeSVGComponent";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addPostReducer } from "../../../../state/profileState/CRUDStateReducer";
import icons from "./constants";

type TextAreaType = {
  accept: string;
  closeFn: () => void;
  value: string;
  onChange: (str: string) => void;
  clearTextArea: (str: string) => void;
  shorts?: boolean;
  theme: string;
};

const TextAreaComponent: React.FC<TextAreaType> = ({ clearTextArea, theme, accept, closeFn, value, onChange, shorts }) => {
  const [files, uploadFiles] = useState(Object);
  const textValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };
  const dispatch = useDispatch();
  const handlerChanged = (e: ChangeEvent<HTMLInputElement>) => {
    uploadFiles(e.target.files);
  };
  const filePicker = (e: any) => {
    e.currentTarget.click();
  };
  console.log(files);
  const shortsJSX = !shorts ? (
    <div>
      <input type="file" id="uploadFile" style={{ display: "none" }} onChange={(e) => handlerChanged(e)} accept={accept} multiple />
      <label htmlFor="uploadFile" id="uploadFile" onClick={(e) => filePicker(e)}>
        <button>
          <SomeSVGComponent propsPath={icons.pictures} />
        </button>
      </label>

      <button>
        <SomeSVGComponent propsPath={icons.music} />
      </button>
      <input
        type="file"
        id="uploadVideo"
        style={{ display: "none" }}
        onChange={(e) => handlerChanged(e)}
        accept={"video/mp4,video/x-m4v,video/*"}
        multiple
      />
      <label htmlFor="uploadVideo" id="uploadVideo" onClick={(e) => filePicker(e)}>
        <button>
          <SomeSVGComponent propsPath={icons.video} />
        </button>
      </label>
    </div>
  ) : (
    <div>
      <input type="file" id="uploadFile" style={{ display: "none" }} onChange={(e) => handlerChanged(e)} accept={accept} multiple />
      <label htmlFor="uploadFile" id="uploadFile" onClick={(e) => filePicker(e)}>
        <button>
          <SomeSVGComponent propsPath={icons.shorts} />
        </button>
      </label>
    </div>
  );
  const addPost = () => {
    const now = new Date();
    const getMonth = now.getMonth() + 1
    const time = now.getDate() + "." + getMonth + "." + now.getFullYear();
    const img = "";
    const music = "";
    const video = "";
    const id = now + "";
    console.log("posted")
    dispatch(addPostReducer(id, time, value, img, music, video))
    clearTextArea("")

  }
  
  return (
    <div className={theme === "White" ? s.profileInfo__CRUDarea : s.profileInfo__CRUDarea__black}>
      <textarea className="" onChange={textValue} value={value} />
      <div className={s.profileInfo__CRUDarea__buttons}>
        <button className={s.profileInfo__CRUDarea__send} onClick={addPost}>
          <SomeSVGComponent propsPath={icons.send} />
        </button>
        <div className={s.profileInfo__CRUDarea__content}>{shortsJSX}</div>
        <button className={s.profileInfo__CRUDarea__close} onClick={closeFn}>
          <SomeSVGComponent propsPath={icons.close} />
        </button>
      </div>
    </div>
  );
};

export default TextAreaComponent;
