import { ReactNode } from 'react'
import * as S from './styles'

export interface ButtonProps {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
}

function Button({ children, size = 'medium' }: ButtonProps) {
  return (
    <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
  )
}

export default Button
