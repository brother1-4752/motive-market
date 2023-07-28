import { QueryClient, QueryClientProvider } from 'react-query'
import { Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import globalStyles from '@/styles/globalStyles'
import Layout from '@/components/Layout/Layout'
import theme from '@/styles/theme'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MoKet - Motive Market</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}