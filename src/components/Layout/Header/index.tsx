import Link from 'next/link'
import clsx from 'clsx'
import { useScrollTrigger } from '@/src/hooks/useScrollTrigger'
import { WINDOW } from '@/src/constants/client'
import { BASE_TITLE } from '@/src/constants/seo'
import { ROUTE_WITHOUT_HOME_VALUE, HOME_ROUTE_VALUE } from '@/src/constants/config'

type Props = {
  currentPage: string
}

export const Header: React.FC<Props> = ({ currentPage }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0, target: WINDOW })
  return (
    <div className="h-16">
      <header
        className={clsx(
          'fixed h-16 w-full bg-background flex justify-center items-center box-border z-10 px-5',
          trigger && ['shadow-md']
        )}
      >
        <div className="flex-1">
          <Link href={HOME_ROUTE_VALUE.href}>{BASE_TITLE}</Link>
        </div>
        <nav className="flex-2 space-x-4">
          {ROUTE_WITHOUT_HOME_VALUE.map(route => (
            <Link key={route.name} href={route.href} passHref>
              <span className="underline underline-offset-2">{route.name}</span>
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
