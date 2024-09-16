import React from "react";
import { createContext, useContext, useState } from "react";
import { mockUsersArray } from "./mockUsersArray";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsersArray);
  const [filteredUsers, setFilteredUsers] = useState(mockUsersArray);
  const [userInFocus, setUserInFocus] = useState(null);
  const handleSetUserInFocusId = (userId) => {
    setUserInFocus(users.filter((user) => user.userId === userId)[0]);
  };
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
  const generateRandomAvatar = (setter) => {
    const randomAvatar = apiSeed[Math.floor(Math.random() * apiSeed.length)];
    const newAvatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${randomAvatar}`;
    setter(newAvatarUrl);
    return;
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        userInFocus,
        setUserInFocus,
        handleSetUserInFocusId,
        generateRandomAvatar,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UsersContext;

export const UsersState = () => {
  return useContext(UsersContext);
};
