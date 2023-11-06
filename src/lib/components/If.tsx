import { Fragment, Children, isValidElement } from "react";
import { ELSE, THEN, WARN_MESSAGE } from "../constant";

type Props = {
  condition: boolean;
  children?: React.ReactNode;
};

function If({ condition, children }: Props) {
  return (
    <Fragment>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return handleInvalidChild();
        if (typeof child.type === "string") return handleInvalidChild();
        if (!("displayName" in child.type)) return handleInvalidChild();
        if (typeof child.type.displayName !== "string")
          return handleInvalidChild();

        const { displayName } = child.type;
        const isThen = condition && displayName === THEN;
        const isElse = !condition && displayName === ELSE;
        const isExtra = ![THEN, ELSE].includes(displayName);

        if (isThen) {
          return child;
        } else if (isElse) {
          return child;
        } else if (isExtra) {
          console.warn(WARN_MESSAGE);
          return null;
        }
        return null;
      })}
    </Fragment>
  );
}

const handleInvalidChild = () => {
  console.warn(WARN_MESSAGE);
  return null;
};

export default If;
