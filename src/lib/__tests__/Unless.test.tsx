import { render, screen } from "@testing-library/react";
import Unless from "../components/Unless";

//Testing the 'Unless' Component
describe("Unless 컴포넌트  테스트", () => {
  //When the condition is false, the children of the 'Unless' component should be rendered.
  test("condition === false 일때 Unless 의 자식 컴포넌트가 랜더링 되어야 한다.", () => {
    const condition = false;

    render(
      <Unless condition={condition}>
        <div>children</div>
      </Unless>,
    );

    const childrenElement = screen.queryByText("children");

    expect(childrenElement).toBeInTheDocument();
  });

  //When the condition is true, the children of the 'Unless' component should not be rendered.
  test("condition === true 일때 Unless 의 자식 컴포넌트가 랜더링 되지 않아야 한다.", () => {
    const condition = true;

    render(
      <Unless condition={condition}>
        <div>children</div>
      </Unless>,
    );

    const childrenElement = screen.queryByText("children");

    expect(childrenElement).not.toBeInTheDocument();
  });
});
