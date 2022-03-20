import clsx from 'clsx'

export type TagVariants = 'success' | 'info' | 'error'

type Props = {
  variant: TagVariants
  className?: string
}

const makeStyle = (variant: TagVariants) => {
  switch (variant) {
    case 'success':
      return ['text-green-400 bg-green-200']
    case 'info':
      return ['text-sky-400 bg-sky-200']
    case 'error':
      return ['text-red-400 bg-red-200']
    default:
      throw new Error('`variant` is require')
  }
}

export const Tag: React.FC<Props> = ({ children, variant, className = '' }) => {
  return <span className={clsx(className, makeStyle(variant), 'rounded p-1')}>{children}</span>
}
