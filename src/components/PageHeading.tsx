import { FC, PropsWithChildren } from "react";

export const PageHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
      {children}
    </h1>
  );
};
