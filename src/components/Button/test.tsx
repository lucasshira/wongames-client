import { screen } from '@testing-library/react'

import Button from './index'
import { renderWithTheme } from '@/utils/tests/helpers'
import { ShoppingCartIcon } from '@phosphor-icons/react'

describe('<Button />', () => {
  // medium button
  it('should show the medium size button by default ', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      'font-size': '1.4rem'
    })
  })

  // small button
  it('should show the small size button when is passed ', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  // large button
  it('should show the large size button when is passed ', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      padding: '0.8rem 4.8rem',
      height: '5rem',
      'font-size': '1.6rem'
    })
  })

  // full width button
  it('should render a full width version of the button ', () => {
    renderWithTheme(<Button isFullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  // button with icon
  it('should render the button with the icon', () => {
    renderWithTheme(
      <Button icon={<ShoppingCartIcon data-testid="icon" size={18} />}>
        Add to cart
      </Button>
    )

    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Sign in
      </Button>
    )

    expect(screen.getByText(/sign in/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
