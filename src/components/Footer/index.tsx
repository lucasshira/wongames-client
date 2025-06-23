import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

function Footer() {
  return (
    <S.Wrapper aria-label="footer">
      <Logo color="black" />

      <S.Content aria-label="content">
        <S.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Contact
          </Heading>

          <nav aria-labelledby="contacts">
            <a href="#">suporte@wongames.gg</a>
            <a href="#">+55 21 33283719</a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
            <a href="#">Facebook</a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/store">Loja</Link>
            <Link href="/">Explorar</Link>
            <Link href="/">Buscar</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" lineBottom lineColor="secondary" size="small">
            Location
          </Heading>

          <p>Rua 7 de Maio</p>
          <p>527 - 89020330</p>
          <p>Rio de Janeiro, Brasil</p>
        </S.Column>
      </S.Content>

      <S.Copyright>
        Won Games {new Date().getFullYear()} © Todos os Direitos Reservados
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
