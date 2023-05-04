import { NavLink } from "react-router-dom";
import s from "../../../../App.module.css";
import f from "./BarComponent.module.css";
import BarButtons from "./BarButtons";

import NavFeatures from "../../../../state/barContent/barState";

const BarComponent = () => {
  const GenericBar = NavFeatures.map((el) => {
    return (
      <NavLink to={el.rout} className={({ isActive }) => (isActive ? f.isActiveStyle : "")} key={el.id}>
        <div className={el.style}>
          <img src={el.icon} alt="" />
          <span>{el.tag}</span>
        </div>
      </NavLink>
    );
  });
  return (
    <div className={s.menuBar}>
      <div>
        <div className={s.menuBar__container}>{GenericBar}</div>
        <BarButtons />
      </div>
    </div>
  );
};

export default BarComponent;
