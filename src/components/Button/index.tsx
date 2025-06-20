import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export interface ButtonProps {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  isFullWidth?: boolean
  icon?: ReactNode
  onClick?: (event: MouseEvent) => void
}

function Button({
  children,
  icon,
  size = 'medium',
  isFullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      isFullWidth={isFullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
