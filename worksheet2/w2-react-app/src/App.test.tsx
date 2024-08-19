import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2+2).toBe(4);
  });
});

describe("App Component", () => {
  //Passing Test Example
  it("increments the count when the button is cclicked", () => {
    render(<App />);

    const button = screen.getByText("Increment count");
    const countText = screen.getByText(/Count:/);

    //Initially, the count should be 0
    expect(countText).toHaveTextContent("Count: 0");

    //Simulate a button click
    fireEvent.click(button);

    //After clicking, the count should be 1
    expect(countText).toHaveTextContent("Count: 1");
  });
})
