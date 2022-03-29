import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  open?: boolean
}

export const CollapseBody: React.FC<Props> = ({ children, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="collapse-body"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          aria-hidden={open}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
