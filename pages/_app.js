import Head from 'next/head';
import wrapper from '../controller/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>    
      <Head>
        <title>AcmeFactoryTest</title>
        <meta name='title' content='AcmeFactoryTest' />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta property='og:title' content='AcmeFactoryTest' />
        <meta property='og:description' content='Buy & sale nft online' />
        <meta
          property='og:image'
          content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'}
        />

        <meta property='og:locale' content='id' />
        <meta property='og:image:alt' content='logo' />
        <meta property='og:image:type' content='png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='twitter:url'
          content={process.env.NEXT_PUBLIC_MAIN_URL}
        />
        <meta property='twitter:title' content='AcmeFactoryTest' />
        <meta
          property='twitter:image'
          content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'}
        />
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
      </Head>
      <Component {...pageProps} />      
    </>
  );
}

export default wrapper.withRedux(MyApp);