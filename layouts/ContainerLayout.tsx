import { Container as NextContainer } from "@nextui-org/react";

import type { FC, ReactNode } from "react";

interface iProps {
  children: ReactNode;
}

const ContainerLayout: FC<iProps> = ({ children }) => {
  return (
    <NextContainer lg as={"main"}>
      {children}
    </NextContainer>
  );
};
export default ContainerLayout;
