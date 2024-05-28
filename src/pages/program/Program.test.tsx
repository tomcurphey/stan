import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Program } from "./Program";

// Mock jsonData
jest.mock("../../assets/data/data.json", () => [
  {
    id: 1,
    title: "Item 1",
    image: "image1.jpg",
    rating: 4,
    year: 2021,
    type: "Type1",
    genre: "Genre1",
    language: "Language1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Item 2",
    image: "image2.jpg",
    rating: 5,
    year: 2020,
    type: "Type2",
    genre: "Genre2",
    language: "Language2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Item 3",
    image: "image3.jpg",
    rating: 3,
    year: 2019,
    type: "Type3",
    genre: "Genre3",
    language: "Language3",
    description: "Description 3",
  },
]);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useNavigate: () => mockNavigate,
  };
});

describe("Program Component", () => {
  const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={ui} />
        </Routes>
      </BrowserRouter>
    );
  };

  test("renders Program component with data", async () => {
    renderWithRouter(<Program />, { route: "/1" });

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  test("renders Program component with error state", async () => {
    renderWithRouter(<Program />, { route: "/999" });

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(
      screen.getByText(/an unknown error occurred. please try again later/i)
    ).toBeInTheDocument();
  });

  test("handles Backspace key navigation", async () => {
    renderWithRouter(<Program />, { route: "/1" });

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    fireEvent.keyDown(window, { key: "Backspace" });
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
