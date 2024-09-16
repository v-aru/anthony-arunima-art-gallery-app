import React from "react";

import Comment from "../Comment/Comment";

import { StyledCommentsList } from "./commentsListStyling";

export default function CommentsList({ filteredComments }) {
  return (
    <StyledCommentsList>
      {filteredComments
        ?.sort((a, b) => {
          const dateA = new Date(a.createdAtDateTime);
          const dateB = new Date(b.createdAtDateTime);
          return dateB - dateA;
        })
        .map((commentObj) => (
          <Comment key={commentObj?.id} commentObj={commentObj} />
        ))}
    </StyledCommentsList>
  );
}
