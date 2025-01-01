import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

describe("Footer Component", () => {
  const renderFooter = () => {
    return render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  };

  test("renders footer sections correctly", () => {
    renderFooter();

    // Test section headings
    expect(screen.getByText("Navigation")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Social Media")).toBeInTheDocument();

    // Test contact information
    expect(screen.getByText("Address: 123 Main St, Chicago, IL 60601")).toBeInTheDocument();
    expect(screen.getByText("Phone: (123) 456-7890")).toBeInTheDocument();
    expect(screen.getByText("Email: info@littlelemon.com")).toBeInTheDocument();

    // Test social media links
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();
  });
});
