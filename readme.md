# Beautiful React Conditional Rendering

[![npm](https://img.shields.io/npm/v/react-if-render)](https://www.npmjs.com/package/react-if-render)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-if-render?label=bundle%20size&logo=webpack)](https://bundlephobia.com/result?p=react-if-render)
[![Downloads](https://img.shields.io/npm/dt/react-if-render)](http://npm-stat.com/charts.html?package=react-if-render)
[![license](https://img.shields.io/npm/l/react-if-render)](https://img.shields.io/npm/l/react-if-render)

You can achieve beautiful conditional rendering in React.

> Install
```bash
npm i react-if-render
```

> Usage
```javascript
import { Else, If, Then } from "react-if-render";

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


```

> Online Example

[Try Codesandbox](https://codesandbox.io/s/react-if-render-38cfm4)


> Description
1. `<If>`

```javascript
<If condition={true || false}>
  <Then>Render when the condition is true.</Then>
  <Else>Render when the condition is false</Else>
</If>
 ```
  * `<If condition={true}>` → The children of `<Then>` are rendered.
  * `<If condition={false}>` → The children of `<Else>` are rendered.


2. `<When>`
```javascript
<When condition={true}>
  <div>Render when the condition is true.</div>
</When>
 ```
* `<When condition={true}>` →  The children of `<When>` are rendered.


3. `<Unless>`
```javascript
<Unless condition={false}>
  <div>Render when the condition is false.</div>
</Unless>
 ```
  * `<Unless condition={false}>`  →  The children of `<Unless>` are rendered.



## release note

* 0.0.1
  * Publish
* 0.0.2
  * Update package dependencies, readme
* 0.0.3
  *  Adding the 'When' and 'Unless' Components
