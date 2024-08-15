describe("counter two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textEl = screen.getByText("Counter Two");
    const count = screen.getByRole("heading", {
      level: 4,
    });

    expect(textEl).toBeInTheDocument();
    expect(count).toHaveTextContent(0);
  });

  test("Handlers are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increase" });
    const decrementButton = screen.getByRole("button", { name: "Decrease" });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    user.click(incrementButton);
    user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
