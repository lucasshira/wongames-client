import Logo from './index'

import { screen } from '@testing-library/dom'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1. renderizar o componente
    renderWithTheme(<Logo />)

    // 2. selecionar o elemento a ser testado
    // const logo = container.firstChild

    // 3. expect - assertion - comparacao (analise)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when colors is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    })
  })

  it('should render a normal logo when is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    })
  })
})
