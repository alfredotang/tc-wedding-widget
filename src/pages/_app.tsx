import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Layout } from '@/src/components/Layout'
import '@/src/assets/styles/global.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const { pathname } = router
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Layout currentPage={pathname}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
