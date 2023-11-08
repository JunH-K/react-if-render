import { Fragment, ReactNode } from "react";

type Props = {
  condition: boolean;
  children?: ReactNode;
};

function Unless({ condition, children }: Props) {
  return <Fragment>{!condition && children}</Fragment>;
}

export default Unless;
