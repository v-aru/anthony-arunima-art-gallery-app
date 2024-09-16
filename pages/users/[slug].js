import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useFavourites } from "@/components/Favourites/FavouritesContext";

import CommentsContext from "@/components/CommentsList/CommentsContext";
import UsersContext from "@/components/UsersList/UsersContext";

import CommentsList from "@/components/CommentsList/CommentsList";
import Title from "@/components/Title/Title";
import User from "@/components/User/User";
import { CommentsWrapper } from "../art-pieces/slugStyles";

import { Root, StyledBody } from "./slugStyles";

export default function UserPage({}) {
  const router = useRouter();
  const { comments } = useContext(CommentsContext);
  const { userInFocus } = useContext(UsersContext);
  const [filteredComments, setFilteredComments] = useState(null);

  const { favourites, toggleFavourite } = useFavourites();
  useEffect(() => {
    setFilteredComments(
      comments.filter((comment) => {
        return comment?.userId === userInFocus?.userId;
      })
    );
  }, [userInFocus]);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!userInFocus) {
    return <div>Art piece not found</div>;
  }

  return (
    <Root>
      <Title line1="B R U S H &nbsp; 'N' &nbsp; B Y T E " line2="U S E R S" />
      <StyledBody>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* <Menu context="slug" /> */}
          <User />{" "}
        </div>
      </StyledBody>
      <CommentsWrapper>
        <CommentsList filteredComments={filteredComments} />
      </CommentsWrapper>
    </Root>
  );
}
