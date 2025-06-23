import styled, { css } from 'styled-components'
import media from "styled-media-query"

import type { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 4.5rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  isHideOnMobile: () => css`
    ${media.lessThan("medium")`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, isHideOnMobile }) => css`
    color: ${theme.colors[color!]};
    
    ${size && wrapperModifiers[size]()}

    ${isHideOnMobile && wrapperModifiers.isHideOnMobile()}
  `}
`