import React, { useContext, useEffect } from "react";
import { StyledCommentsList } from "./commentsListStyling";
import { mockCommentsArray } from "./mockCommentsArray";
import Comment from "../Comment/Comment";
import CommentsContext from "./CommentsContext";

export default function CommentsList({ artPieceInFocus }) {
  const { comments, filteredCommentsBySlug, setFilteredCommentsBySlug } =
    useContext(CommentsContext);

  useEffect(() => {
    setFilteredCommentsBySlug(
      mockCommentsArray.filter(
        (comment) => comment.slug === artPieceInFocus.slug
      )
    );
  }, [comments, artPieceInFocus]);

  return (
    <StyledCommentsList>
      {filteredCommentsBySlug
        ?.sort((a, b) => {
          const dateA = new Date(a.createdAtDateTime);
          const dateB = new Date(b.createdAtDateTime);
          return dateB - dateA;
        })
        .map((commentObj) => (
          <Comment key={commentObj.id} commentObj={commentObj} />
        ))}
    </StyledCommentsList>
  );
}
