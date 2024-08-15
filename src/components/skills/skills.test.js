import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["html", "css", "js"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listel = screen.getByRole("list");
    expect(listel).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listel = screen.getAllByRole("listitem");
    expect(listel).toHaveLength(skills.length);
  });

  test("renders login btn", () => {
    render(<Skills skills={skills} />);
    const loginbtn = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginbtn).toBeInTheDocument();
  });

  test("does not render learn btn", () => {
    render(<Skills skills={skills} />);
    const startLbtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLbtn).not.toBeInTheDocument();
  });

  test("start learning button is actually displayed", async () => {
    const views = render(<Skills skills={skills} />);
    logRoles(views.container);
    const startLearning = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );

    expect(startLearning).toBeInTheDocument();
  });
});
