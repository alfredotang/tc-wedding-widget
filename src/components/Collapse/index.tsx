import { useState, cloneElement, Children } from 'react'
import clsx from 'clsx'
export { CollapseTitle } from '@/src/components/Collapse/CollapseTitle'
export { CollapseBody } from '@/src/components/Collapse/CollapseBody'

type Props = {
  className?: string
  defaultOpen?: boolean
}

export const Collapse: React.FC<Props> = ({ children, className = '', defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen)

  const handleToggle = () => {
    setOpen(pre => !pre)
  }

  const elements = Children.toArray(children) as React.ReactElement[]

  return (
    <div
      className={clsx(
        className,
        `flex flex-col justify-center items-center shadow-md p-4 rounded-md relative w-full overflow-hidden`
      )}
    >
      {elements?.length > 0 &&
        elements.map(element => cloneElement(element, { open, handleToggle }))}
    </div>
  )
}
