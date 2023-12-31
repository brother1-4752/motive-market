import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/Common/Layout/Layout';
import GlobalStyle from '@/styles/GlobalStyle';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MoKet - Motive Market</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
