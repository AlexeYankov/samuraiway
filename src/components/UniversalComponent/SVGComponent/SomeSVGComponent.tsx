import s from './SomeSVG.module.css'

type SVGType = {
    propsPath: string,
    fill?:string
}

const SomeSVGComponent = (a: SVGType) => {
  const finalFill = a.fill ? a.fill : "gray"
  return (
      <svg
        className={s.container}
        fill={finalFill}
        width={20}
        viewBox="0 0 512 512"
      >
        <path d={a.propsPath} />
      </svg>
  );
};

export default SomeSVGComponent;
