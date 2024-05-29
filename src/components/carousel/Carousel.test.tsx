import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Carousel } from "./Carousel";

// Mock jsonData
jest.mock("../../assets/data/data.json", () => [
  { id: 1, title: "Item 1", image: "image1.jpg" },
  { id: 2, title: "Item 2", image: "image2.jpg" },
  { id: 3, title: "Item 3", image: "image3.jpg" },
]);

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useNavigate: () => mockNavigate,
  };
});

describe("Carousel Component", () => {
  test("renders Carousel component with data", async () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>
    );

    // Wait for the loading state to be removed
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    // Check if the Item components are rendered
    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
    expect(screen.getByAltText("Item 2")).toBeInTheDocument();
    expect(screen.getByAltText("Item 3")).toBeInTheDocument();
  });

  test("navigates items with ArrowLeft and ArrowRight keys", async () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    const firstItem = screen.getByAltText("Item 1").closest("div");
    firstItem?.focus();

    fireEvent.keyDown(firstItem!, { key: "ArrowRight" });
    expect(screen.getByAltText("Item 2").closest("div")).toHaveFocus();

    fireEvent.keyDown(screen.getByAltText("Item 2").closest("div")!, {
      key: "ArrowRight",
    });
    expect(screen.getByAltText("Item 3").closest("div")).toHaveFocus();

    fireEvent.keyDown(screen.getByAltText("Item 3").closest("div")!, {
      key: "ArrowLeft",
    });
    expect(screen.getByAltText("Item 2").closest("div")).toHaveFocus();
  });

  test("navigates to item detail page on Enter key press", async () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    const firstItem = screen.getByAltText("Item 1").closest("div");
    firstItem?.focus();

    fireEvent.keyDown(firstItem!, { key: "Enter" });
    expect(mockNavigate).toHaveBeenCalledWith("/1");
  });
});
