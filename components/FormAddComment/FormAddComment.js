import React, { useContext, useEffect, useRef } from "react";
import {
  StyledFormAddComment,
  TextArea,
  FormAddCommentFooter,
  Button,
} from "./formAddCommentStyling";
import CommentsContext from "../CommentsList/CommentsContext";

export default function FormAddComment() {
  const textAreaRef = useRef(null);
  const { filteredCommentsBySlug } = useContext(CommentsContext);
  console.log(filteredCommentsBySlug?.length);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <StyledFormAddComment>
      <div>{filteredCommentsBySlug?.length} Comments</div>

      <label className="input-sizer stacked">
        <TextArea
          ref={textAreaRef}
          onInput={handleInput}
          rows="1"
          placeholder="comment"
        ></TextArea>
      </label>
      <FormAddCommentFooter>
        <Button>Comment</Button>
      </FormAddCommentFooter>
    </StyledFormAddComment>
  );
}
