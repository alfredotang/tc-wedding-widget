import dateTime from '@/src/helpers/dateTime'

export const WEDDING_TIME = dateTime('2022/04/02 12:00')

export const LOCATION_LINK = 'https://goo.gl/maps/eYiuLm7WuX8kKPRcA'

export const ROUTES: Routes = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'search',
    href: '/search',
  },
]

export const [HOME_ROUTE_VALUE] = ROUTES.filter(item => item.name === 'home')

export const ROUTE_WITHOUT_HOME_VALUE = ROUTES.filter(item => item.name !== 'home')
