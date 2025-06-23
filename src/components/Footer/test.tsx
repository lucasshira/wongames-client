import { screen } from '@testing-library/react'

import Footer from './index'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Footer />', () => {
  it('should render 4 footer columns in a grid layoyut', () => {
    renderWithTheme(<Footer />)

    const footer = screen.getByLabelText('content')

    expect(footer).toBeInTheDocument()
    expect(footer).toHaveStyle({
      display: 'grid'
    })
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        new RegExp(`Won Games ${new Date().getFullYear()} ©`, 'i')
      )
    ).toBeInTheDocument()

    const columns = footer.querySelectorAll('div')
    expect(columns.length).toBe(4)

    const gridTemplateColumns =
      window.getComputedStyle(footer).gridTemplateColumns
    const columnCount = gridTemplateColumns.split(' ').length

    expect(columnCount).toBe(2)
  })

  it('should render the logo on the footer', () => {
    renderWithTheme(<Footer />)

    const footer = screen.getByLabelText('footer')
    const logo = screen.getByLabelText(/won games/i)

    expect(logo).toBeInTheDocument()
    expect(footer).toContainElement(logo)
  })
})
