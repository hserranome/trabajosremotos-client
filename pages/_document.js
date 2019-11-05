import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import '../static/css/style.scss';
import 'easymde/dist/easymde.min.css';
import '../static/css/nprogress.css';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
   const { html, head, errorHtml, chunks } = renderPage()
   const styles = flush()
   return { html, head, errorHtml, chunks, styles }
  }
  render() {
    return (
      <html lang="es">
        <Head></Head>
        <body> 
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}