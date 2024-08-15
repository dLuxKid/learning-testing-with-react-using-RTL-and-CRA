import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      name: "Job Application Form",
      level: 1, // signifying h1
    });
    expect(pageHeading).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEl).toBeInTheDocument();

    const nameEl2 = screen.getByLabelText("Name");
    expect(nameEl2).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const t_c = screen.getByLabelText("Terms and conditions");
    expect(t_c).toBeInTheDocument();

    const submitbtn = screen.getByRole("button");
    expect(submitbtn).toBeInTheDocument();

    const textelS = screen.getByText("Section 1", { exact: "false" });
    expect(textelS).toBeInTheDocument();

    const textelR = screen.getByText(/form/i);
    expect(textelR).toBeInTheDocument();

    const textelF = screen.getByText((content) => content.startsWith("All"));
    expect(textelF).toBeInTheDocument();
  });
});
