import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

import { CommentsProvider, CommentsState } from "./CommentsProvider"; // Adjust path
import UsersContext from "../UsersList/UsersContext";
import { UsersProvider } from "@/components/UsersList/UsersContext";
import { FavouritesProvider } from "@/components/Favourites/FavouritesContext";
import Layout from "@/components/Layout/Layout";
import CommentsList from "@/components/CommentsList/CommentsList";
import Comment from "@/components/Comment/Comment";
import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import CommentsContext from "@/components/CommentsList/CommentsContext";
import FormAddComment from "@/components/FormAddComment/FormAddComment";

// Mock Next.js' Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock the useWindowSize hook
jest.mock("@uidotdev/usehooks", () => ({
  useWindowSize: jest.fn().mockReturnValue({ width: 800 }), // Simulate a window width
}));

describe("ArtPiecesPreview Component", () => {
  it("passes the colors given by the API to the ColorCirclesWrapper component when in focus", () => {
    const mockArtPieceInFocus = {
      slug: "test-slug",
      colors: ["#ff0000", "#00ff00", "#0000ff"], // Sample colors
    };

    render(
      <ArtPiecesPreview
        artPieceInFocus={mockArtPieceInFocus}
        onSetArtPieceInFocus={() => {}} // Mock the function
        slug={slug}
        artist={artist}
        title={title}
        year={year}
        genre={genre}
        width={width}
        height={height}
        image={image}
        // artPieceInFocus={  artPieceInFocus}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
        isFavourite={isFavourite}
        // onSetArtPieceInFocus={  onSetArtPieceInFocus}
      />
    );

    // Assert that ColorCirclesWrapper receives the colors
    const colorCirclesWrapper = screen.getByTestId("color-circles-wrapper"); // Assuming you have a data-testid on the ColorCirclesWrapper
    expect(colorCirclesWrapper).toBeInTheDocument();

    // Assert that the correct number of circles are rendered
    const colorCircles = screen.getAllByTestId("color-circle"); // Assuming you have a data-testid on each Circle
    expect(colorCircles).toHaveLength(mockArtPieceInFocus.colors.length);

    // Optionally, you can assert that each circle has the correct color
    colorCircles.forEach((circle, index) => {
      expect(circle).toHaveStyle(
        `background-color: ${mockArtPieceInFocus.colors[index]}`
      );
    });
  });

  // Add more tests to cover other scenarios and edge cases
});
describe("CommentsProvider", () => {
  it("provides the expected context values", () => {
    const mockUserInFocus = { userId: 1 };

    render(
      <UsersContext.Provider value={{ userInFocus }}>
        <CommentsProvider>
          <CommentsState>
            {({ comments, setComments, ...otherValues }) => (
              <div>{/* Assert comments and other values here */}</div>
            )}
          </CommentsState>
        </CommentsProvider>
      </UsersContext.Provider>
    );

    // ... assertions
  });

  // ... other tests for filtering, etc.
});

// Comment Component Tests

describe("Comment", () => {
  const mockComment = {
    comment: "This is a test comment.",
    createdAtDateTime: new Date(),
    userName: "Test User",
    userId: 1,
    likes: 5,
  };

  it("renders comment details correctly", () => {
    render(
      <UsersContext.Provider
        value={{
          handleSetUserInFocusId: jest.fn(),
          generateRandomAvatar: jest.fn(),
        }}
      >
        <Comment commentObj={mockComment} />
      </UsersContext.Provider>
    );

    // ... assertions for comment text, date, username, avatar
  });

  // ... other tests for Read More/Less, user interactions
});

// Detail View Integration Tests (Illustrative, needs adaptation)

describe("DetailView with Comments", () => {
  const mockFilteredComments = [
    {
      comment: "This is the first test comment.",
      // ... other comment properties
    },
    {
      comment: "Another interesting comment here.",
      // ... other comment properties
    },
    {
      id: Math.random().toString(36).substring(2, 9), // Generate a random id
      slug: "orange-red-and-green",
      likes: Math.floor(Math.random() * 12),
      comment:
        "The bold colors in this abstract piece evoke a sense of energy and movement. I love how the orange and red play off each other.",
      userId: "user123",
      userName: "ArtEnthusiast",
      createdAtDateTime: "2023-11-20T10:35:12Z",
    },
  ];

  it("renders comments list and displays each comment's text", async () => {
    render(
      <UsersProvider>
        <FavouritesProvider>
          <CommentsProvider>
            <Layout>
              <CommentsList filteredComments={mockFilteredComments} />
            </Layout>
          </CommentsProvider>
        </FavouritesProvider>
      </UsersProvider>
    );

    // Assert that each comment's text is displayed
    mockFilteredComments.forEach((comment) => {
      expect(screen.getByText(comment.comment)).toBeInTheDocument();
    });
  });

  // ... other tests ...
});
describe("FormAddComment", () => {
  it("renders an input field for writing a comment", () => {
    // Mock the CommentsContext to provide the necessary values
    const mockFilteredComments = [];
    const mockSetFilteredComments = jest.fn();

    render(
      <CommentsContext.Provider
        value={{
          filteredComments: mockFilteredComments,
          setFilteredComments: mockSetFilteredComments,
        }}
      >
        <FormAddComment />
      </CommentsContext.Provider>
    );

    // Assert that the input field (TextArea) is present
    const inputField = screen.getByRole("textbox", { name: "comment" });
    expect(inputField).toBeInTheDocument();

    // Optionally, you can assert the placeholder text
    expect(inputField).toHaveAttribute("placeholder", "comment");
  });

  it("renders a submit button labeled 'Post'", () => {
    // Mock the CommentsContext to provide the necessary values
    const mockFilteredComments = [];
    const mockSetFilteredComments = jest.fn();

    render(
      <CommentsContext.Provider
        value={{
          filteredComments: mockFilteredComments,
          setFilteredComments: mockSetFilteredComments,
        }}
      >
        <FormAddComment />
      </CommentsContext.Provider>
    );

    // Assert that the submit button is present and has the correct label
    const submitButton = screen.getByRole("button", { name: "Post" });
    expect(submitButton).toBeInTheDocument();
  });
});
describe("FormAddComment and CommentsList Integration", () => {
  it("appends a new comment to the list after submitting the form", async () => {
    // Initial mock comments
    const initialComments = [
      {
        id: "1",
        slug: "some-slug",
        likes: 5,
        comment: "Existing comment 1",
        userId: "user1",
        userName: "User 1",
        createdAtDateTime: "2023-01-01T12:00:00Z",
      },
    ];

    // Mock the CommentsContext
    const mockSetFilteredComments = jest.fn();

    render(
      <CommentsContext.Provider
        value={{
          filteredComments: initialComments,
          setFilteredComments: mockSetFilteredComments,
        }}
      >
        <div>
          <FormAddComment />
          <CommentsList filteredComments={initialComments} />{" "}
          {/* Pass the initial comments */}
        </div>
      </CommentsContext.Provider>
    );

    // Type a new comment into the input field
    const inputField = screen.getByPlaceholderText("comment");
    const newCommentText = "This is a new comment";
    fireEvent.change(inputField, { target: { value: newCommentText } });

    // Click the submit button
    const submitButton = screen.getByRole("button", { name: "Post" });
    fireEvent.click(submitButton);

    // Wait for the new comment to be added to the list (you might need to adjust the timeout if your component updates asynchronously)
    await waitFor(() => {
      // Assert that the new comment is displayed in the CommentsList
      expect(screen.getByText(newCommentText)).toBeInTheDocument();

      // Optionally, assert that setFilteredComments was called with the updated comments array
      expect(mockSetFilteredComments).toHaveBeenCalledWith(expect.any(Array));
      expect(mockSetFilteredComments.mock.calls[0][0]).toHaveLength(
        initialComments.length + 1
      ); // Check if the array length increased
      expect(
        mockSetFilteredComments.mock.calls[0][0].some(
          (comment) => comment.comment === newCommentText
        )
      ).toBe(true); // Check if the new comment is in the array
    });
  });
});
