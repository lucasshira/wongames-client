import { render, screen } from '@testing-library/react'

import { Main } from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main title="Default Title" description="Default description" />)

    expect(
      screen.getByRole('heading', { name: /default title/i })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Main title="Default Title" description="Default description" />
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
