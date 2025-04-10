import { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import './style.scss'
import Icon from '../Icon'

interface SelectProps {
  options: string[]
  selected: string
  label?: string
  name?: string
  className?: string
  onChange?: (value: string, name?: string) => void
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

  const handleOptionClick = (option: string) => {
    setIsOpen(false)
    onChange?.(option, name)
  }

  return (
    <div className={clsx('select', className, { open: isOpen })}>
      <button
        ref={rootRef}
        className={clsx('dropdown__button', { open: isOpen })}
        onClick={handleSelectClick}
      >
        {selected || label}
        {isOpen ? <Icon name="arrow-up" /> : <Icon name="arrow-down" />}
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {options.map(option => (
            <li
              key={option}
              className={clsx('dropdown__list-item', {
                selected: option === selected,
              })}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
