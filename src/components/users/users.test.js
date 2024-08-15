import { render, screen } from "@testing-library/react";
import "fast-text-encoding";
import { server } from "../../mocks/server";
import Users from "./users";

server.listen();

describe("testing http requests", () => {
  test("should render correctly", () => {
    render(<Users />);
    const textEl = screen.getByText("Users");
    expect(textEl).toBeInTheDocument();
  });

  // we mock api mocking library with the library Mock Service Moker
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
