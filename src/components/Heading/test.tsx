import { screen } from '@testing-library/react'

import Heading from './index'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      borderLeft: '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom side', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom>
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #3CD3C1',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'font-size',
      '1.6rem'
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })
})
