import { Header } from '@/src/components/Layout/Header'

type Props = {
  currentPage: string
}
export const Layout: React.FC<Props> = ({ children, currentPage }) => {
  return (
    <div>
      <Header currentPage={currentPage} />
      <main className="px-6 mb-8">{children}</main>
    </div>
  )
}
