import { render, screen } from "@testing-library/react";
import { If, Then, Else } from "../index";

//Conditional Rendering Tests
describe("조건부 랜더링 테스트", () => {
  //Only the Then component should be rendered when condition === true.
  test("If condition === true 일때 Then 하위 컴포넌트만 랜더링 되어야한다.", () => {
    const condition = true;

    render(
      <If condition={condition}>
        <Then>
          <div>Then</div>
        </Then>
        <Else>
          <div>Else</div>
        </Else>
      </If>,
    );

    const thenElement = screen.queryByText("Then");
    const elseElement = screen.queryByText("Else");

    expect(thenElement).toBeInTheDocument();
    expect(elseElement).not.toBeInTheDocument();
  });

  //Only the Else component should be rendered when condition === false.
  test("If condition === false 일때 Else 하위 컴포넌트만 랜더링 되어야한다.", () => {
    const condition = false;

    render(
      <If condition={condition}>
        <Then>
          <div>Then</div>
        </Then>
        <Else>
          <div>Else</div>
        </Else>
      </If>,
    );
    const thenElement = screen.queryByText("Then");
    const elseElement = screen.queryByText("Else");

    expect(elseElement).toBeInTheDocument();
    expect(thenElement).not.toBeInTheDocument();
  });
});
