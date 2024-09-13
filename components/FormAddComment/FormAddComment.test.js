import { render, screen } from "@testing-library/react";
import { mockCommentsArray } from "./mockCommentsArray";
import FormAddComment from "./FormAddComment";

test("Does FormAddComment.js render the input field?", () => {
  render(<FormAddComment commentsArr={mockCommentsArray} />);
});
test("Does FormAddComment.js receive the input?", () => {
  "";
});
test("Does FormAddComment.js receive the onSubmitHandler?", () => {
  "";
});
test("Does FormAddComment.js return the entered value?", () => {
  "";
});
