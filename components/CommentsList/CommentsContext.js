import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { mockCommentsArray } from "./mockCommentsArray";

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState(mockCommentsArray);
  const [filteredCommentsBySlug, setFilteredCommentsBySlug] =
    useState(mockCommentsArray);
  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        filteredCommentsBySlug,
        setFilteredCommentsBySlug,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export default CommentsContext;

export const CommentsState = () => {
  return useContext(CommentsContext);
};
