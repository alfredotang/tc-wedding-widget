import Link from 'next/link'
import clsx from 'clsx'
import { useScrollTrigger } from '@/src/hooks/useScrollTrigger'
import { WINDOW } from '@/src/constants/client'
import { ROUTES, HOME_ROUTE_VALUE } from '@/src/constants/config'

type Props = {
  currentPage: string
}

export const Header: React.FC<Props> = ({ currentPage }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0, target: WINDOW })
  return (
    <div className="h-16">
      <header
        className={clsx(
          'fixed h-16 w-full bg-background flex justify-center items-center box-border z-20 px-5',
          trigger && ['shadow-md']
        )}
      >
        <div className="flex-1">
          <Link href={HOME_ROUTE_VALUE.href}>Alfredo & Esther&apos;s Wedding</Link>
        </div>
        <nav className="flex-2 space-x-4">
          {ROUTES.map(route => (
            <Link key={route.name} href={route.href} passHref>
              <span className="underline underline-offset-2 cursor-pointer">
                {route.name.toUpperCase()}
              </span>
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
