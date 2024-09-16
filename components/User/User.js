import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../UsersList/UsersContext";
import { StyledAvatar, StyledParagraph } from "../Comment/commentStyling";
import { StyledUserWrapper, StyledUserHeader } from "./userStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function User({}) {
  const { userInFocus, generateRandomAvatar } = useContext(UsersContext);
  const [avatarUrl, setAvatarUrl] = useState("");
  dayjs.extend(relativeTime);

  useEffect(() => {
    generateRandomAvatar(setAvatarUrl);
  }, []);

  return (
    <StyledUserWrapper>
      {" "}
      <StyledAvatar>
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
      <StyledUserHeader>
        <StyledParagraph variant="small" flex="end">
          {dayjs(userInFocus?.createdAtDateTime).fromNow()}
        </StyledParagraph>
        <StyledParagraph variant="large">
          {userInFocus?.userName}
        </StyledParagraph>
      </StyledUserHeader>
    </StyledUserWrapper>
  );
}
