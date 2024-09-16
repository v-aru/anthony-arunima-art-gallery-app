
import React, { useContext, useEffect, useRef, useState } from "react";

import {
  StyledFormAddComment,
  TextArea,
  FormAddCommentFooter,
  Button,
} from "./formAddCommentStyling";
import CommentsContext from "../CommentsList/CommentsContext";
import Menu from "../Menu/Menu";

export default function FormAddComment() {
  const textAreaRef = useRef(null);
  const { filteredCommentsBySlug, setFilteredCommentsBySlug } =
    useContext(CommentsContext);
  const [commentText, setCommentText] = useState(
    "I love how this image captures the vastness of the ocean. It makes me feel so small and insignificant in comparison to this magnificent creature."
  ); // State to control the TextArea's value


  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setCommentText(e.target.value); // Update the state with the new value
  };

  const handleSubmit = () => {
    const currentSlug = window.location.pathname.split("/").pop();

    const newComment = {
      id: Math.random().toString(36).substring(2, 9),
      slug: currentSlug,
      likes: 0,
      comment: commentText.trim(),
      userId: "user123",
      userName: "ArtEnthusiast",
      createdAtDateTime: new Date().toISOString(),
    };

    setFilteredCommentsBySlug((prevComments) => {
      if (prevComments) {
        return [...prevComments, newComment];
      } else {
        return [newComment];
      }
    });

    setCommentText("");
  };

  return (
    <StyledFormAddComment>

      <label className="input-sizer stacked">
        <TextArea
          ref={textAreaRef}
          onInput={handleInput}
          rows="1"
          placeholder="comment"
          value={commentText} // Bind the value to the state
          onChange={handleInput} // Also handle onChange to update the state
        />
      </label>
    
    </StyledFormAddComment>
  );
}
