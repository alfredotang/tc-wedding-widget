import Head from 'next/head'
import { useRouter } from 'next/router'
import { BASE_TITLE } from '@/src/constants/seo'

type Props = {
  title?: string
  description?: string
}

export const SEO: React.FC<Props> = () => {
  const { asPath } = useRouter()
  const [, routeName] = asPath.split('/')

  const title = routeName ? `${routeName} | ${BASE_TITLE}` : BASE_TITLE

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
