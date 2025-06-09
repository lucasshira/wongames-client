import * as S from './styles'

export function Main({
  title = 'Default Title',
  description = 'Default Description'
}: {
  title?: string
  description?: string
}) {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </S.Wrapper>
  )
}
