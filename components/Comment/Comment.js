import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import UsersContext from "../UsersList/UsersContext";

import {
  StyledCommentWrapper,
  StyledCommentHeader,
  StyledCommentBody,
  StyledCommentMenu,
  StyledAvatar,
  SVGWrapper,
  StyledParagraph,
} from "./commentStyling";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import Image from "next/image";


dayjs.extend(relativeTime);

export default function Comment({ commentObj }) {
  const { userInFocus, handleSetUserInFocusId, generateRandomAvatar } =
    useContext(UsersContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const maxChars = 90;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const displayedCommentText = isExpanded
    ? commentObj?.comment
    : `${commentObj?.comment.slice(0, maxChars).trim()} ...`;

  useEffect(() => {
    generateRandomAvatar(setAvatarUrl);
  }, []);


  return (
    <StyledCommentWrapper>
      <StyledAvatar onClick={() => handleSetUserInFocusId(commentObj?.userId)}>
        <img
          src={avatarUrl}
          alt={"apiSeed"}
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
          }}
        />
      </StyledAvatar>
      <StyledCommentBody>
        <StyledCommentHeader>
          <StyledParagraph variant="small" flex="end">
            {dayjs(commentObj?.createdAtDateTime).fromNow()}
          </StyledParagraph>
          <StyledParagraph variant="large" function="link">
            <Link
              href={`/users/${commentObj?.userId}`}
              onClick={() => handleSetUserInFocusId(commentObj?.userId)}
            >
              {commentObj?.userName}
            </Link>
          </StyledParagraph>
        </StyledCommentHeader>
        <StyledParagraph>{displayedCommentText}</StyledParagraph>{" "}
        {commentObj?.comment.length > maxChars && (
          <StyledParagraph
            variant="small"
            function="link"
            flex="start"
            onClick={toggleExpand}
            style={{ cursor: "pointer", color: " #2a324b" }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </StyledParagraph>
        )}
        <StyledCommentMenu>
          <SVGWrapper
            stroke="currentColor"
            // fill={isFavourite ? "red" : "transparent"}
            fill={"transparent"}
            viewBox="0 0 24 24"
          >
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
          </SVGWrapper>
          <StyledParagraph variant="">{commentObj?.likes}</StyledParagraph>{" "}
        </StyledCommentMenu>{" "}
      </StyledCommentBody>
    </StyledCommentWrapper>
  );
}
