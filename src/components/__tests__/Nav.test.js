import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../Nav";

describe("Nav Component", () => {
  const renderNav = () => {
    return render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
  };

  test("renders navigation links correctly", () => {
    renderNav();

    const navLinks = ["HOME", "ABOUT", "MENU", "RESERVATIONS", "ORDER ONLINE", "LOGIN"];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test("renders logo image", () => {
    renderNav();
    expect(screen.getByAltText("Little Lemon logo")).toBeInTheDocument();
  });
});
