import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Comment from "./Comment";
import { CommentModel } from "../../models/comment.model";

describe("<Comment />", () => {
  test("it should mount", () => {
    render(<Comment {...CommentModel.createNewObject()} />);

    const comment = screen.getByTestId("Comment");

    expect(comment).toBeInTheDocument();
  });
});
