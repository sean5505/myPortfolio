import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="My name is Steven Gibson and I am a React Front End Developer located in NYC."
        />

        <meta name="theme-color" content="Silverish-Gray" />
        <meta property="og:title" content="Steven Gibson - Front-End Developer" />
        <meta property='og:type' content='profile'/>
        <meta
          property="og:description"
          content="I am a React Front End Developer passionate about building web applications  "
        />
        <meta property="og:image" content="/assets/siteImg.png" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
