import { useState, cloneElement, Children } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import classes from '@/src/components/Select/index.module.css'
import { Backdrop } from '@/src/components/Backdrop'
export { SelectOption } from '@/src/components/Select/SelectOption'

type Props = {
  onChange: (value: any) => void
  placeholder?: string
  value: string
}

export const Select: React.FC<Props> = ({
  value,
  placeholder = 'placeholder',
  onChange,
  children,
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(s => !s)
  }

  const handleClose = () => {
    setShow(false)
  }
  const handleSelect = (event: React.MouseEvent, selectValue: string) => {
    event.stopPropagation()
    onChange(selectValue)
    handleClose()
  }

  const elements = Children.toArray(children) as React.ReactElement[]

  return (
    <>
      <div className={classes.select} onClick={handleClick}>
        <div className={clsx('whitespace-nowrap', value && `text-black`)}>
          {value || placeholder}
        </div>
        <div className="z-10 bg-white absolute right-1 h-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <Backdrop show={show} onClose={handleClose}>
        <motion.ul
          className={clsx(classes.list, classes.bottom, 'max-h-[50vh]')}
          key="drawer"
          initial="drawer"
          animate="open"
          exit="drawer"
          variants={{
            open: { opacity: 1, height: '50vh' },
            drawer: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          onClick={event => {
            event.stopPropagation()
          }}
        >
          {elements?.length > 0 &&
            elements.map(element => cloneElement(element, { handleSelect, currentValue: value }))}
        </motion.ul>
      </Backdrop>
    </>
  )
}
