import { render, renderHook, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { act } from "react";
import { CounterTwo } from "./CounterTwo";
import { useCounter } from "./useCounter";

describe("use counter", () => {
  test("should render the initial count", () => {
    // because a custom hook does not return jsx element it would return an error, hooks do not have dom element
    // render(useCounter);

    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    expect(result.current.count).toBe(0);
  });

  test("should accpet and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 0 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
