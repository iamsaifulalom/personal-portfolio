import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="antialiased max-w-[1440px] mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
