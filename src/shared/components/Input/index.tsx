import { useState, useEffect } from 'react'
import clsx from 'clsx'
import InputMask from '@mona-health/react-input-mask'
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
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
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
  error,
  onChange,
  onBlur,
  onKeyDown,
}: InputProps) => {
  return (
    <div className={clsx('input-wrapper', { 'input-wrapper-error': !!error })}>
      {type === 'tel' ? (
        <InputMask
          mask="+1 999 999 9999"
          id="phone"
          name={name}
          type="tel"
          autoComplete="on"
          required={required}
          placeholder={placeholder ?? '+7 (___) ___ __ __'}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
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
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className="input"
        />
      )}
    </div>
  )
}

export default Input
