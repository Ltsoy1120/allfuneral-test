import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'
import './style.scss'

interface InputProps {
  type?: string
  name?: string
  placeholder?: string
  value: string
  maxLength?: number
  max?: number
  min?: number
  required?: boolean
  autoFocus?: boolean
  disabled?: boolean
  autoComplete?: string
  isInvalid?: boolean
  endIcon?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  maxLength,
  max,
  min,
  required,
  autoFocus,
  disabled,
  autoComplete,
  isInvalid,
  endIcon,
  onChange,
  onKeyPress,
}: InputProps) => {
  const [inputType, setInputType] = useState<string>(type)

  useEffect(() => {
    setInputType(type)
  }, [type])

  const togglePasswordVisibility = () => {
    setInputType(prev => (prev === 'password' ? 'text' : 'password'))
  }

  return (
    <div className={clsx('input-wrapper', { 'input-wrapper-error': isInvalid })}>
      <input
        type={inputType}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
        maxLength={maxLength}
        max={max}
        min={min}
        autoComplete={autoComplete}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="input"
      />

      {type === 'password' && (
        <Icon
          name={inputType === 'password' ? 'close-eye' : 'open-eye'}
          size={16}
          onClick={togglePasswordVisibility}
        />
      )}

      {endIcon && <Icon name={endIcon} size={20} />}

      {isInvalid && (
        <div className="input-error__wrapper">
          {/* <p className="input-error__wrapper-text">{t("accountPage.error")}</p> */}
        </div>
      )}
    </div>
  )
}

export default Input
