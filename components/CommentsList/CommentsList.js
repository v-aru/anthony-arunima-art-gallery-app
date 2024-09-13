import React, { useEffect, useState } from "react";
import { StyledCommentsList } from "./commentsListStyling";
import { mockCommentsArray } from "./mockCommentsArray";
import Comment from "../Comment/Comment";

export default function CommentsList({ artPieceInFocus }) {
  const [filteredCommentsBySlug, setFilteredCommentsBySlug] =
    useState(mockCommentsArray);

  useEffect(() => {
    setFilteredCommentsBySlug(
      mockCommentsArray.filter(
        (comment) => comment.slug === artPieceInFocus.slug
      )
    );
  }, [artPieceInFocus]);

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
