import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const mockPieces = [
  {
    colors: ["#ff0000", "#ffff00"],
    imageSource: "https://example.com/image.jpg",
    dimensions: { width: 300, height: 200 },
    artist: "Alice & Bob",
  },
];
test("Does Spotlight render a random piece", () => {
  render(<Spotlight pieces={mockPieces} />);
});
