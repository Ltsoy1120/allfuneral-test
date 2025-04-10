import { useRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'
import './style.scss'

interface MultiSelectProps {
  options: { label: string; value: string }[]
  selected: string[]
  label?: string
  name?: string
  className?: string
  onChange?: (value: string[], name?: string) => void
}

const MultiSelect = ({ options, label, name, selected, onChange, className }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  const handleSelectClick = () => {
    setIsOpen(prev => !prev)
  }

  const handleOptionToggle = (value: string) => {
    const updated = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value]

    onChange?.(updated, name)
  }

  const selectedLabels = options
    .filter(o => selected.includes(o.value))
    .map(o => o.label)
    .join(', ')

  return (
    <div className={clsx('multi-select', className, { open: isOpen })} ref={rootRef}>
      <button className="dropdown__button" onClick={handleSelectClick}>
        {selectedLabels || label}
        {isOpen ? <Icon name="arrow-up" /> : <Icon name="arrow-down" />}
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {options.map(option => {
            const isChecked = selected.includes(option.value)
            return (
              <li
                key={option.value}
                className={clsx('dropdown__list-item', { selected: isChecked })}
                onClick={() => handleOptionToggle(option.value)}
              >
                <label className="dropdown__list-label">
                  {isChecked ? (
                    <Icon name="check" size={12} className="dropdown__check-icon" />
                  ) : (
                    <div className="dropdown__check"></div>
                  )}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleOptionToggle(option.value)}
                  />
                  {option.label}
                </label>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default MultiSelect
