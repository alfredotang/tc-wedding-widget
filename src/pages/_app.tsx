import type { AppProps } from 'next/app'
import { Layout } from '@/src/components/Layout'
import '@/src/assets/styles/global.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const { pathname } = router
  return (
    <Layout currentPage={pathname}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
