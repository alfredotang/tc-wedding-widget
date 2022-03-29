import clsx from 'clsx'

type Props = {
  onClick?: () => void
  className?: string
}

export const Button: React.FC<Props> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'bg-white text-text px-4 py-1 text-center border border-slate-300 rounded-md hover:shadow-lg h-[38px]'
      )}
    >
      {children}
    </button>
  )
}
