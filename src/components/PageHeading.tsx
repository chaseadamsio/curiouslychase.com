import { FC, PropsWithChildren } from "react";

export const PageHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1
      className="font-display text-5xl leading-[3rem] uppercase"
      id="overview"
    >
      {children}
    </h1>
  );
};
