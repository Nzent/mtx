import 'tailwindcss/tailwind.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import "gridjs/dist/theme/mermaid.min.css";
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="title" content="Matreix TDM" />
        <meta name="description" content="Cod4 Matrix TDM official gaming clan website" />
        <meta name="keywords" content="Gaming,TDM,Matrix,cod4,clan,nisalk,gamers,gamer,game,pc game,shooter" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="nisalk" />
        <meta name="theme-color" content="#ffffff" />
        <title>MATRIX Gaming</title>
      </Head>
      <Layout>
        <NextNProgress
          color="#fbbf24"
          startPosition={0.1}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
