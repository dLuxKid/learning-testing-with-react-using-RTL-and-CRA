import React from "react";

export default function Application() {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <img src="https://via-placeholder.com/150" alt="a person with" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value={"Wishwas"}
            onChange={(e) => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value={""}>Select a country</option>
            <option value={"US"}>US</option>
            <option value={"GB"}>GB</option>
            <option value={"CA"}>CA</option>
            <option value={"IN"}>IN</option>
            <option value={"AU"}>AU</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> Terms and conditions
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
