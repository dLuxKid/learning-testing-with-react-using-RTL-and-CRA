import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  // use test.only to test only that function, test.skip to skip test
  test("renders greeting correctly", () => {
    render(<Greet />);
    const textel = screen.getByText("Hello");
    expect(textel).toBeInTheDocument();
  });

  describe("Nested", () => {
    // use xit to skip, fit to test only
    it("greet with name", () => {
      render(<Greet name={"user"} />);
      const textel = screen.getByText("Hello user");
      expect(textel).toBeInTheDocument();
    });
  });
});
