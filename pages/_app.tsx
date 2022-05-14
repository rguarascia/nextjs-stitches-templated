import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Head from "next/head";
import { ThemeToggle } from "../components/ThemeToggle";
import ContainerLayout from "../layouts/ContainerLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {},
  });

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <Head>
        <title>Website</title>
        <meta name="title" content="Website" />
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextUIProvider>
        <ThemeToggle />
        <ContainerLayout>
          <Component {...pageProps} />
        </ContainerLayout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
