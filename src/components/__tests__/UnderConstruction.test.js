import { render, screen } from "@testing-library/react";
import UnderConstruction from "../UnderConstruction";

describe("UnderConstruction Component", () => {
  test("renders under construction message correctly", () => {
    render(<UnderConstruction />);

    expect(screen.getByText("Under Construction")).toBeInTheDocument();
    expect(
      screen.getByText("We're working hard to bring you something amazing. Please check back soon!")
    ).toBeInTheDocument();
  });
});
