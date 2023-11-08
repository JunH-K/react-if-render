import { Fragment, ReactNode } from "react";

type Props = {
  condition: boolean;
  children?: ReactNode;
};

function When({ condition, children }: Props) {
  return <Fragment>{condition && children}</Fragment>;
}

export default When;
