import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline, globalCss } from "@nextui-org/react";
import { Fragment } from "react";

const globalStyles = globalCss({});

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      <Fragment key={"init"}>{initialProps.styles}</Fragment>,
      <Fragment key={"base"}>{CssBaseline.flush()}</Fragment>,
      <Fragment key={"global"}>{globalStyles()}</Fragment>,
    ],
  };
};
