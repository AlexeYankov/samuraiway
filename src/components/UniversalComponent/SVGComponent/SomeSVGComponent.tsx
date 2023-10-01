import s from "./SomeSVG.module.css";

type SVGType = {
  propsPath: string;
  fill?: string;
  click?: () => void;
  width?: number;
};

const SomeSVGComponent = ({ propsPath, fill, click, width = 25 }: SVGType) => {
  
  const finalFill = fill ? fill : "gray";
  return (
    <svg className={s.container} fill={finalFill} height={20} width={width} viewBox="0 0 512 512" onClick={click}>
      <path d={propsPath} />
    </svg>
  );
};

export default SomeSVGComponent;
