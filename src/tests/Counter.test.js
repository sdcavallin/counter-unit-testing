import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const counter = screen.getByTestId("count");
  const incrementButton = screen.getByText("+");

  fireEvent.click(incrementButton);

  expect(counter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const counter = screen.getByTestId("count");
  const decrementButton = screen.getByText("-");

  fireEvent.click(decrementButton);

  expect(counter).toHaveTextContent("-1");
});
 