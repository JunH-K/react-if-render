import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

function Then({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}

Then.displayName = "Then";
export default Then;
