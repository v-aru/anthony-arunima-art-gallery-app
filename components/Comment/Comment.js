import React, { useEffect, useState } from "react";
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

dayjs.extend(relativeTime);

export default function Comment({ commentObj }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 90; // Adjust this value as needed
  const [avatarUrl, setAvatarUrl] = useState("");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedComment = isExpanded
    ? commentObj.comment
    : `${commentObj.comment.slice(0, maxChars).trim()} ...`;

  const apiSeed = [
    "Mia",
    "Harley",
    "Milo",
    "Abby",
    "Angel",
    "Cookie",
    "Chester",
    "Bandit",
    "Coco",
    "Bailey",
  ];

  useEffect(() => {
    const generateRandomAvatar = () => {
      const randomAvatar = apiSeed[Math.floor(Math.random() * apiSeed.length)];
      const newAvatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${randomAvatar}`;
      setAvatarUrl(newAvatarUrl);
    };

    generateRandomAvatar();
  }, []);

  return (
    <StyledCommentWrapper>
      <StyledAvatar>
        <img
          src={avatarUrl}
          alt={"apiSeed"}
          style={{
            width: "2rem",
            height: "2rem",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: "#888",
            borderRadius: "50%",
            // "&:hover": {
            //   border: "3px solid white",
            // },
          }}
        />
      </StyledAvatar>
      <StyledCommentBody>
        <StyledCommentHeader>
          <StyledParagraph variant="small" flex="end">
            {dayjs(commentObj.createdAtDateTime).fromNow()}
          </StyledParagraph>
          <StyledParagraph variant="large" function="link">
            {commentObj.userName}
          </StyledParagraph>
        </StyledCommentHeader>
        <StyledParagraph>{displayedComment}</StyledParagraph>{" "}
        {commentObj.comment.length > maxChars && (
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
          <StyledParagraph variant="">{commentObj.likes}</StyledParagraph>{" "}
        </StyledCommentMenu>{" "}
      </StyledCommentBody>
    </StyledCommentWrapper>
  );
}
