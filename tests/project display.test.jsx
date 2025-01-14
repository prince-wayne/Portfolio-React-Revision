import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectDisplay from "../src/components/project display/project display.jsx"; // Adjust the import path as needed
import projects from '../src/data/projects.json'; // Adjust the import path as needed
test("renders the first project initially", () => {
  render(<ProjectDisplay />);
  expect(screen.getByText(projects[0].title)).toBeInTheDocument();
  expect(screen.getByText(projects[0].description)).toBeInTheDocument();
});

test("updates project data when buttons are clicked", () => {
  render(<ProjectDisplay />);
  const nextButton = screen.getByTestId("Next-btn");
  const prevButton = screen.getByTestId("Previous-btn");

  // Click "Next" button and check the second project
  fireEvent.click(nextButton);
  expect(screen.getByText(projects[1].title)).toBeInTheDocument();
  expect(screen.getByText(projects[1].description)).toBeInTheDocument();

  // Click "Previous" button and check the first project
  fireEvent.click(prevButton);
  expect(screen.getByText(projects[0].title)).toBeInTheDocument();
  expect(screen.getByText(projects[0].description)).toBeInTheDocument();
});

test("displays the correct number of dots", () => {
  render(<ProjectDisplay />);
  const dots = screen.getAllByTestId("dot"); // Assuming each dot has a data-testid="dot"
  expect(dots.length).toBe(4);
});

test("dots show the correct active status", () => {
    render(<ProjectDisplay />);
    const nextButton = screen.getByText("Next");

    // Check initial active dot for the first project
    expect(screen.getByTestId("dot-0")).toHaveClass("active");
    expect(screen.getByTestId("dot-1")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-2")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-3")).not.toHaveClass("active");

    // Click "Next" button and check active dot for the second project
    fireEvent.click(nextButton);
    expect(screen.getByTestId("dot-0")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-1")).toHaveClass("active");
    expect(screen.getByTestId("dot-2")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-3")).not.toHaveClass("active");

    // Click "Next" button and check active dot for the third project
    fireEvent.click(nextButton);
    expect(screen.getByTestId("dot-0")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-1")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-2")).toHaveClass("active");
    expect(screen.getByTestId("dot-3")).not.toHaveClass("active");

    // Click "Next" button and check active dot for the fourth project
    fireEvent.click(nextButton);
    expect(screen.getByTestId("dot-0")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-1")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-2")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-3")).toHaveClass("active");

    // Click "Next" button and check active dot for projects beyond the fourth
    fireEvent.click(nextButton);
    expect(screen.getByTestId("dot-0")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-1")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-2")).toHaveClass("active");
    expect(screen.getByTestId("dot-3")).not.toHaveClass("active");

    // Click "Next" button and check active dot for the final project
    fireEvent.click(nextButton);
    expect(screen.getByTestId("dot-0")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-1")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-2")).not.toHaveClass("active");
    expect(screen.getByTestId("dot-3")).toHaveClass("active");
});