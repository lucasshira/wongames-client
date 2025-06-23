import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  isFullWidth?: boolean
  icon?: ReactNode
  as?: ElementType
} & ButtonTypes

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
