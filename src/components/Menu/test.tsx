import { render, screen } from '@testing-library/react'

import Menu from './index'

describe('<Menu />', () => {
  it('should render correctly', () => {
    render(<Menu />)

    expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument()
  })
})