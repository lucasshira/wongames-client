import styled, { css } from 'styled-components'
import * as HeadingStyles from '@/components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a, span, p {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      font-size: ${theme.font.sizes.xsmall};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    margin-top: ${theme.spacings.xxlarge};
  `}
`