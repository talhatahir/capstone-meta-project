import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";

describe("Hero Component", () => {
  const renderHero = () => {
    return render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  };

  test("renders hero content correctly", () => {
    renderHero();

    expect(screen.getByText("Welcome to Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago, Illinois")).toBeInTheDocument();
    expect(screen.getByText(/We are a family owned Mediterranean restaurant/)).toBeInTheDocument();
    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
    expect(screen.getByAltText("Little Lemon Restaurant")).toBeInTheDocument();
  });
});
