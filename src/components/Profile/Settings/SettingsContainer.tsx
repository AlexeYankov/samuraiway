import { ReactNode } from "react";

type AboutType = {
  children: ReactNode;
  className?: string;
};

export const SettingsContainer = ({ children, className }: AboutType) => {
  return <div className={className}>{children}</div>;
};
