import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type BreakpointKeys = keyof DefaultBreakpoints

export interface MediaMatchProps {
  greaterThan?: BreakpointKeys
  lessThan?: BreakpointKeys
}

const mediaMatchModifiers = {
  lessThan: (size: BreakpointKeys) => css`
    ${media.lessThan(size)`
      display: block
    `}
  `,

  greaterThan: (size: BreakpointKeys) => css`
    ${media.greaterThan(size)`
      display: block
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
