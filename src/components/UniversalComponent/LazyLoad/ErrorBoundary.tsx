import s from "./LazyLoad.module.scss";
import { LazyJSX } from "./LazySuspense";

export const ErrorBoundaryFallBack = () => {
  return (
    <div className={s.glass}>
      <div style={{position: 'absolute', top: '100px'}}>
        <p style={{ padding: "80px" }}>Please reload page. App has some error.</p>
        <LazyJSX />
      </div>
    </div>
  );
};
