import React from "react";
import { render } from "@testing-library/react";
import GameControllerProvider from "@/src/contexts/GameControllerProvider";

const AllTheProviders = ({ children }) => {
  return <GameControllerProvider>{children}</GameControllerProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
