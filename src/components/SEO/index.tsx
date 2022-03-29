import Head from 'next/head'
import { useRouter } from 'next/router'
import { BASE_TITLE } from '@/src/constants/seo'
import TCDrawnImage from '@/src/assets/images/tc_drawn.png'

type Props = {
  title?: string
  description?: string
}

export const SEO: React.FC<Props> = () => {
  const { asPath } = useRouter()
  const [, routeName] = asPath.split('/')

  const title = routeName ? `${routeName} | ${BASE_TITLE}` : BASE_TITLE

  const { src, width, height } = TCDrawnImage

  const ogImageContent = {
    src,
    width: (width / 10).toString(),
    height: (height / 10).toString(),
  }

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" content={ogImageContent.src} />
      <meta property="og:image:width" content={ogImageContent.width} />
      <meta property="og:image:height" content={ogImageContent.height} />
    </Head>
  )
}
