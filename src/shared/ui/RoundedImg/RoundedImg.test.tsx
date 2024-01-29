import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RoundedImg from "./RoundedImg";

describe("<RoundedImg />", () => {
  test("it should mount", () => {
    render(<RoundedImg src="" />);

    const roundedImg = screen.getByTestId("RoundedImg");

    expect(roundedImg).toBeInTheDocument();
  });
});
