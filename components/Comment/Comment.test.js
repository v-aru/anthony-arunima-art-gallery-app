import { render, screen } from "@testing-library/react";
import { mockCommentObj } from "./mockCommentObj";
import Comment from "./Comment";

test("Does Comment.js render a comment of a User?", () => {
  render(<Comment commentObj={mockCommentObj} />);
});
