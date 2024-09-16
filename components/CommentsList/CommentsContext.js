import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { mockCommentsArray } from "./mockCommentsArray";
import UsersContext from "../UsersList/UsersContext";

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const { userInFocus } = useContext(UsersContext);
  const [comments, setComments] = useState(mockCommentsArray);
  const [filteredCommentsBySlug, setFilteredCommentsBySlug] =
    useState(mockCommentsArray);
  const [filteredCommentsByUserId, setFilteredCommentsByUserId] =
    useState(mockCommentsArray);

  useEffect(() => {
    setFilteredCommentsByUserId(
      comments.filter((comment) => {
        return comment?.userId === userInFocus?.userId;
      })
    );
  }, [userInFocus]);
  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        filteredCommentsBySlug,
        setFilteredCommentsBySlug,
        filteredCommentsByUserId,
        setFilteredCommentsByUserId,
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
