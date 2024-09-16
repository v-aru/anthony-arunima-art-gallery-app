jest.mock('@uidotdev/usehooks', () => ({
    useWindowSize: jest.fn(() => ({
      // Mock the specific behavior of the hook
      value: "mocked value"
    })),
  }));

import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces"; 
import { FavouritesProvider } from "../Favourites/FavouritesContext";

const mockPieces = [
  {
    colors: ["#ff0000", "#ffff00"],
    imageSource: "https://example.com/image.jpg",
    dimensions: { width: 300, height: 200 },
    artist: "Alice & Bob",
  },
];

test("Does ArtPieces render correctly", () => {
    console.log(mockPieces);
  render(
    <FavouritesProvider>
        <ArtPieces 
            dataSlug = {mockPieces.slug}
            key={mockPieces.slug}
            slug={mockPieces.slug}
            artist={mockPieces.artist}
            title={mockPieces.name}
            year={mockPieces.year}
            genre={mockPieces.genre}
            width={mockPieces[0].dimensions.width}
            height={mockPieces[0].dimensions.height}
            image={mockPieces.imageSource}
        />
    </FavouritesProvider>
);
  // Check if the artist name is rendered
  expect(screen.getByText((content) => content.includes("Alice & Bob"))).toBeInTheDocument();
});