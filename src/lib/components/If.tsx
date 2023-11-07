import { Fragment, Children, isValidElement, ReactNode } from "react";
import { ELSE, THEN, WARN_MESSAGE } from "../constant";

type Props = {
  condition: boolean;
  children?: ReactNode;
};

function If({ condition, children }: Props) {
  const processChild = (child: ReactNode) => {
    if (!isValidElement(child)) return handleInvalidChild();
    if (typeof child.type === "string") return handleInvalidChild();
    if (!("displayName" in child.type)) return handleInvalidChild();
    if (typeof child.type.displayName !== "string") return handleInvalidChild();

    const { displayName } = child.type;
    const isThen = condition && displayName === THEN;
    const isElse = !condition && displayName === ELSE;
    const isExtra = ![THEN, ELSE].includes(displayName);

    if (isThen || isElse) {
      return child;
    } else if (isExtra) {
      console.warn(WARN_MESSAGE);
      return null;
    }
    return null;
  };

  return <Fragment>{Children.map(children, processChild)}</Fragment>;
}

const handleInvalidChild = () => {
  console.warn(WARN_MESSAGE);
  return null;
};

export default If;
