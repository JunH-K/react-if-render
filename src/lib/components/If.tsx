import { Fragment, Children, isValidElement } from "react";

type Props = {
  condition: boolean;
  children?: React.ReactNode;
};

const WARN_MESSAGE = "If the component's children should be Then and Else";

function If({ condition, children }: Props) {
  return (
    <Fragment>
      {Children.map(children, (child) => {
        if (
          isValidElement(child) &&
          typeof child.type !== "string" &&
          "displayName" in child.type &&
          typeof child.type.displayName === "string"
        ) {
          const { displayName } = child.type;

          if (condition && displayName === "Then") {
            return child;
          } else if (!condition && displayName === "Else") {
            return child;
          }
        }
        console.warn(WARN_MESSAGE);
        return null;
      })}
    </Fragment>
  );
}

export default If;
