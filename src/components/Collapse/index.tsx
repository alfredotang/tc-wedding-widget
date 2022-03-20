import { useState, useRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useMeasure } from '@/src/hooks/useMeasure'

type Props = { className?: string; title: string; defaultOpen?: boolean }

// TODO: use react clone element
export const Collapse: React.FC<Props> = ({
  children,
  className = '',
  title,
  defaultOpen = true,
}) => {
  const [open, setOpen] = useState(defaultOpen)

  const handleToggle = () => {
    setOpen(pre => !pre)
  }

  return (
    <div
      className={clsx(
        className,
        `flex flex-col justify-center items-center space-y-6 shadow-md p-4 rounded-md relative min-w-full overflow-hidden`
      )}
    >
      <div className="text-lg flex items-center">
        <label>{title}</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={clsx('h-6 w-6 absolute right-6 duration-500', { 'rotate-180': !open })}
          fill="currentColor"
          onClick={handleToggle}
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={clsx(!open && 'hidden')} aria-hidden={!open}>
        {children}
      </div>
    </div>
  )
}
