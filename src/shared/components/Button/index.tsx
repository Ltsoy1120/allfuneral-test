import Icon from '../Icon'
import './style.scss'

type ButtonVariant = 'filled' | 'outline' | 'flattened' | 'icon'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  disabled?: boolean
  className?: string
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  startIcon?: string
  iconSize?: number
  endIcon?: string
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'filled',
  disabled = false,
  className = '',
  onClick,
  children,
  startIcon,
  iconSize,
  endIcon,
}) => {
  const classes = `button button--${variant} ${className}`

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {startIcon && <Icon name={startIcon} size={iconSize ?? 16} />}
      {children}
      {endIcon && <Icon name={endIcon} size={16} />}
      {/* {startIcon && (
        <span className="button__icon-left">
          <Icon name={startIcon} size={iconSize ?? 16} />
        </span>
      )}
      <span className="button__text">{children}</span>
      {endIcon && (
        <span className="button__icon-right">
          <Icon name={endIcon} size={16} />
        </span>
      )} */}
    </button>
  )
}

export default Button
