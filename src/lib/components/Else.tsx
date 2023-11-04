import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

function Else({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}

Else.displayName = "Else";
export default Else;
