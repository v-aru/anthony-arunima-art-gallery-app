import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import { FavouritesProvider } from "../Favourites/FavouritesContext";

const mockPieces = [
  {
    colors: ["#ff0000", "#ffff00", "#0000ff", "#00ff00", "#ffffff"], 
    imageSource: "https://example.com/image.jpg",
    dimensions: { width: 300, height: 200 },
    artist: "Alice & Bob",
    title: "Art Piece 1",
    slug: "art-piece-1",
    genre: "abstract",
    year: "2021",
  },
];

test("Does Spotlight render a random piece", () => {
  const mockPiece = mockPieces[0];

  render( 
    <FavouritesProvider>
      <Spotlight 
        image={mockPiece.imageSource}
        title={mockPiece.title}
        artist={mockPiece.artist}
        colors={mockPiece.colors}
        width={mockPiece.dimensions.width}
        height={mockPiece.dimensions.height}
        slug={mockPiece.slug}
        genre={mockPiece.genre}
        year={mockPiece.year}
      />
    </FavouritesProvider>
  );

  const image = screen.getByAltText("spotlight piece");
  expect(image).toBeInTheDocument();
});
