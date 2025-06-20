import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Omit<ButtonProps, 'icon'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  isFullWidth: () => css`
    width: 100%
  `,

  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    :first-child {
      display: flex;
    }

    :nth-child(2) {
      margin-left: ${theme.spacings.xxsmall};
    }

    svg {
      width: 1.5rem;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, isFullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    ${!!size && wrapperModifiers[size](theme)}
    ${isFullWidth && wrapperModifiers.isFullWidth()}
    ${hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`