import React, { useEffect, useState } from "react";
import {
  StyledCommentWrapper,
  StyledCommentHeader,
  StyledAvatar,
  StyledUserDisplayName,
  StyledCommentFooter,
} from "./commentStyling";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import Image from "next/image";

dayjs.extend(relativeTime);

export default function Comment({ commentObj }) {
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

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const generateRandomAvatar = () => {
      const randomAvatar = apiSeed[Math.floor(Math.random() * apiSeed.length)];
      const newAvatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${randomAvatar}`;
      setAvatarUrl(newAvatarUrl);
    };

    generateRandomAvatar();
  }, [apiSeed]);

  return (
    <StyledCommentWrapper>
      <StyledCommentHeader>
        <StyledAvatar>
          <img
            src={avatarUrl}
            alt={"apiSeed"}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </StyledAvatar>
        <StyledUserDisplayName>{commentObj.userName}</StyledUserDisplayName>
      </StyledCommentHeader>
      <div>{commentObj.comment}</div>
      <StyledCommentFooter>
        {dayjs(commentObj.createdAtDateTime).fromNow()}
      </StyledCommentFooter>
    </StyledCommentWrapper>
  );
}
