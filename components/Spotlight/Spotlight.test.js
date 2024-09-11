import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
const mockPieces = [
  {
    colors: ["#ff0000", "#00ff00"],
    imageSource: "",
    dimensions: { width: 200, height: 200 },
    artist: "Alice & Bob",
  },
];
test("Does Spotlight render a RandomArtPiece?", () => {
  render();
});
