import Header from "@/components/header/header";
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/variables.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
