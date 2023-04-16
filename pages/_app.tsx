import GameControllerProvider from "@/src/contexts/GameControllerProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameControllerProvider>
      <Component {...pageProps} />
    </GameControllerProvider>
  );
}
