import { render, screen } from '@testing-library/react'

import MediaMatch from './index'
import React from 'react'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  // roda antes de todos os testes
  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden (by default) if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })
})
