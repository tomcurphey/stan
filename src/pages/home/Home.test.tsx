import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

// Mock the Carousel component
jest.mock("../../components/carousel/Carousel", () => ({
  Carousel: () => <div data-testid="carousel">Mock Carousel</div>,
}));

test("renders Home component without crashing", () => {
  render(<Home />);

  // Check if the Home component's container is present
  const containerElement = screen.getByTestId("home-container");
  expect(containerElement).toBeInTheDocument();

  // Check if the Carousel component is present
  const carouselElement = screen.getByTestId("carousel");
  expect(carouselElement).toBeInTheDocument();
});
