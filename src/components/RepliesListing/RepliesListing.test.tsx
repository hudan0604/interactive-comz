import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RepliesListing from "./RepliesListing";

describe("<RepliesListing />", () => {
  test("it should mount", () => {
    render(<RepliesListing replies={[]} />);

    const repliesListing = screen.getByTestId("RepliesListing");

    expect(repliesListing).toBeInTheDocument();
  });
});
