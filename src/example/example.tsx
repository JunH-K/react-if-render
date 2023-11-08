import { Else, If, Then } from "../lib";
import When from "../lib/components/When";
import Unless from "../lib/components/Unless";

export default function Example() {
  const isTrue = true;
  const isFalse = false;

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

        <If condition={isFalse}>
          <Then>Render when the condition is true.</Then>
          <Else>Render when the condition is false</Else>
        </If>
      </div>

      <div>
        <When condition={isTrue}>
          <div>Render when the condition is true.</div>
        </When>
      </div>

      <div>
        <Unless condition={isFalse}>
          <div>Render when the condition is false.</div>
        </Unless>
      </div>
    </div>
  );
}
