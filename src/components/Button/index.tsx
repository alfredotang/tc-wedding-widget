import clsx from 'clsx'

type Props = {
  onClick?: () => void
  className?: string
}

export const Button: React.FC<Props> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, 'rounded bg-background text-text shadow-md p-2 text-center')}
    >
      {children}
    </button>
  )
}
