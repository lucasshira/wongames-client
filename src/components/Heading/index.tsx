import { ReactNode } from 'react'
import * as S from './styles'

export interface HeadingProps {
  children: ReactNode
  color?: 'black' | 'white'
  lineLeft?: boolean
  lineBottom?: boolean
}

function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return (
    <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
