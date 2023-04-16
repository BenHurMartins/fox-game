import { render, screen } from "../test-setup/utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "../pages/index";
import { CAT_URL, DOG_URL } from "@/src/hooks/useImages";

const MOCK_URL = "www.example.com";
const catSuccess = [
  { url: MOCK_URL + 0 },
  { url: MOCK_URL + 1 },
  { url: MOCK_URL + 2 },
  { url: MOCK_URL + 3 },
];
const foxSuccess = { image: MOCK_URL + 4 };
const dogSuccess = {
  message: [MOCK_URL + 5, MOCK_URL + 6, MOCK_URL + 7, MOCK_URL + 8],
};

const catJSONPromise = Promise.resolve(catSuccess);
const dogJSONPromise = Promise.resolve(dogSuccess);
const foxJSONPromise = Promise.resolve(foxSuccess);

const catFetchPromise = Promise.resolve({
  json: () => catJSONPromise,
}) as Promise<Response>;
const dogFetchPromise = Promise.resolve({
  json: () => dogJSONPromise,
}) as Promise<Response>;
const foxFetchPromise = Promise.resolve({
  json: () => foxJSONPromise,
}) as Promise<Response>;

jest.mock("next/router", () => require("next-router-mock"));

// Mocks the fetch api with different types of responses
global.fetch = jest.fn((input) => {
  if (input === CAT_URL) return catFetchPromise;
  if (input === DOG_URL) return dogFetchPromise;
  return foxFetchPromise;
});

test("Render Home page", async () => {
  // ARRANGE
  render(<Home />);

  // ASSERT
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeDisabled();
});

test("Enables Play button on typing name", async () => {
  // ARRANGE
  render(<Home />);

  // ACT
  await userEvent.type(screen.getByRole("textbox"), "Ben");

  // ASSERT
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeEnabled();
});

test("After clicking on play sees the Game Page", async () => {
  // ARRANGE
  render(<Home />);

  // ACT
  await userEvent.type(screen.getByRole("textbox"), "Ben");
  await userEvent.click(screen.getByRole("button"));

  //assert
  expect(screen.getByText(/Score/)).toBeInTheDocument();
});
