import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://js.stripe.com/v3/" />
        </Head>
        <body style={{ backgroundColor: "#f4f6f8" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
