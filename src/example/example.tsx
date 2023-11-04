import { Else, If, Then } from "../lib";

export default function Example() {
  const isTrue = true;

  return (
    <div>
      {/* Original Code */}
      <div>
        {isTrue
          ? "Render when the condition is true."
          : "Render when the condition is false"}
      </div>

      {/* Code using the react-if-render package */}
      <div>
        <If condition={isTrue}>
          <Then>Render when the condition is true.</Then>
          <Else>Render when the condition is false</Else>
        </If>
      </div>
    </div>
  );
}
