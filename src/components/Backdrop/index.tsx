import { motion, AnimatePresence } from 'framer-motion'
import classes from '@/src/components/Backdrop/index.module.css'

type Props = {
  show: boolean
  onClose?: () => void
}

export const Backdrop: React.FC<Props> = ({ children, show, onClose }) => {
  const handleClick = () => {
    if (typeof onClose === 'undefined') return
    onClose()
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={classes.backdrop}
          onClick={handleClick}
          key="backdrop"
          initial="backdrop"
          animate="open"
          exit="backdrop"
          variants={{
            open: { opacity: 1 },
            backdrop: { opacity: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
