# Beautiful React Conditional Rendering

[![npm](https://img.shields.io/npm/v/react-if-render)](https://www.npmjs.com/package/react-if-render)
[![Downloads](https://img.shields.io/npm/dt/react-if-render)](http://npm-stat.com/charts.html?package=react-if-render)
[![license](https://img.shields.io/npm/l/react-if-render)](https://img.shields.io/npm/l/react-if-render)

You can achieve beautiful conditional rendering in React.

> Usage

```javascript
import { Else, If, Then } from "react-if-render";

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


```

> Online Example

[Codesandbox Example](https://codesandbox.io/s/react-if-render-38cfm4)


> Install

```bash
npm i react-if-render
```

## release note

* 0.0.1
    * publish
