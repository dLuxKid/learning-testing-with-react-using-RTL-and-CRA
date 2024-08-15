import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(countEl).toBeInTheDocument();
    const IncrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(IncrementBtn).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(countEl).toHaveTextContent("0");
  });

  test("renders 1 after clicking increment button", async () => {
    render(<Counter />);
    const IncrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(IncrementBtn);
    const countEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(countEl).toHaveTextContent("1");
  });

  test("renders 2 after clicking increment btn", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    const countEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(countEl).toHaveTextContent("2");
  });

  test("renders 10 after clicking set button", async () => {
    render(<Counter />);

    const inputAmt = screen.getByRole("spinbutton");
    await user.type(inputAmt, "10");

    const setAmtBtn = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setAmtBtn);

    const countEl = screen.getByRole("heading", {
      level: 1,
    });

    expect(inputAmt).toHaveValue(10);
    expect(countEl).toHaveTextContent("10");
  });

  test("elements are focused in right order", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const inputAmt = screen.getByRole("spinbutton");
    const setAmtBtn = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(incrementBtn).toHaveFocus();

    await user.tab();
    expect(inputAmt).toHaveFocus();

    await user.tab();
    expect(setAmtBtn).toHaveFocus();
  });
});
