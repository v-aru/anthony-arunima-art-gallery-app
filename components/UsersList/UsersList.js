import React, { useContext, useEffect } from "react";
import { StyledUsersList } from "./usersListStyling";

import User from "../User/User";
import UsersContext from "./UsersContext";

export default function UsersList({}) {
  const { users, setUsers, filteredUsers, setFilteredUsers, userInFocus } =
    useContext(UsersContext);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.userId === userInFocus?.userId)
    );
  }, [users, userInFocus]);

  return (
    <StyledUsersList>
      {filteredUsers
        ?.sort((a, b) => {
          const dateA = new Date(a.createdAtDateTime);
          const dateB = new Date(b.createdAtDateTime);
          return dateB - dateA;
        })
        .map((userObj) => (
          <User
            key={userObj.userId}
            userObj={userObj}
            userInFocus={userInFocus}
            // onToggleFavourite={() =>
            //   toggleFavourite(
            //     slug,
            //     artist,
            //     title,
            //     imageSource,
            //     dimensions,
            //     genre,
            //     year
            //   )
            // }
            // onSetArtPieceInFocus={onSetArtPieceInFocus}
          />
        ))}
    </StyledUsersList>
  );
}
