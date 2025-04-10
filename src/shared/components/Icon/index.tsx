import { SVGAttributes } from 'react'
import './style.scss'

export type IconName = string

interface IconProps extends Omit<SVGAttributes<SVGElement>, 'aria-hidden'> {
  size?: number | string
  name?: IconName
  className?: string
  href?: string
  alt?: string
  stroke?: string
  onClick?: () => void
}

const Icon = ({
  size = 20,
  name,
  className = '',
  href,
  alt = '',
  stroke,
  onClick,
  ...rest
}: IconProps) => {
  const combinedClass = `icon ${className}`.trim()

  if (href) {
    return <img src={href} className={combinedClass} alt={alt} aria-hidden="true" />
  }

  return (
    <svg
      className={combinedClass}
      width={size}
      height={size}
      stroke={stroke}
      aria-hidden="true"
      onClick={onClick}
      {...rest}
    >
      <use href={`/icons.svg?v=14#${name}`} />
    </svg>
  )
}

export default Icon
