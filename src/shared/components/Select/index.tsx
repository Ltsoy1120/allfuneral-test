import { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import './style.scss'

interface SelectProps {
  options: Option[]
  selected: Option
  label?: string
  name?: string
  className?: string
  onChange?: (option: Option, name?: string) => void
}

export interface Option {
  value: string
  title: string
  priceType?: string
}

const Select = ({ options, label, name, selected, onChange, className }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const handleSelectClick = () => {
    setIsOpen(prev => !prev)
  }

  const handleOptionClick = (option: Option) => {
    setIsOpen(false)
    onChange?.(option, name)
  }

  return (
    <div className={clsx('select', className)}>
      <button
        ref={rootRef}
        className={clsx('dropdown__button', { open: isOpen })}
        onClick={handleSelectClick}
      >
        {selected.title || label}
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {options.map(option => (
            <li
              key={option.value}
              className="dropdown__list-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
