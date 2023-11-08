import { render, screen } from "@testing-library/react";
import When from "../components/When";

//Testing the 'When' Component
describe("When 컴포넌트  테스트", () => {
  //When the condition is true, the children of the 'When' component should be rendered.
  test("condition === true 일때 When 의 자식 컴포넌트가 랜더링 되어야 한다.", () => {
    const condition = true;

    render(
      <When condition={condition}>
        <div>children</div>
      </When>,
    );

    const childrenElement = screen.queryByText("children");

    expect(childrenElement).toBeInTheDocument();
  });

  //When the condition is false, the children of the 'When' component should not be rendered.
  test("condition === false 일때 When 의 자식 컴포넌트가 랜더링 되지 않아야 한다.", () => {
    const condition = false;

    render(
      <When condition={condition}>
        <div>children</div>
      </When>,
    );

    const childrenElement = screen.queryByText("children");

    expect(childrenElement).not.toBeInTheDocument();
  });
});
