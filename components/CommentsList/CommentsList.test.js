import { render, screen } from "@testing-library/react";
import { mockCommentsArray } from "./mockCommentsArray";
import CommentsList from "./CommentsList";

test("Does CommentsList.js render a list of comments of different Users?", () => {
  render(<CommentsList commentsArr={mockCommentsArray} />);
});
test("Does CommentsList.js filter the list by the artPieceInFocus?", () => {});
test("Does CommentsList.js filter the list by the userInFocus?", () => {});
