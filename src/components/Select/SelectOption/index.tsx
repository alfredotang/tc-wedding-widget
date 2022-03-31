import classes from '@/src/components/Select/SelectOption/index.module.css'

type Props = {
  handleSelect?: (event: React.MouseEvent, selectValue: string) => {}
  value: string
  currentValue?: string
}

export const SelectOption: React.FC<Props> = ({ children, handleSelect, value, currentValue }) => {
  const handleClick = (event: React.MouseEvent) => {
    if (typeof handleSelect === 'undefined') return
    handleSelect(event, value)
  }
  return (
    <li className={classes.selectOption} onClick={handleClick}>
      <div className="flex justify-center items-center">
        {currentValue && value === currentValue && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        <div> {children}</div>
      </div>
    </li>
  )
}
