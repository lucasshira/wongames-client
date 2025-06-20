import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`

type MenuFullProps = {
  isOpenMenu: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpenMenu }) => css`
    opacity: ${isOpenMenu ? 1 : 0};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isOpenMenu ? 'all' : 'none'};
    transition: opacity 0.2s ease-in-out;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      margin: ${theme.spacings.xsmall};
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.2s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${RegisterBox} {
      transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.2s ease-in-out;
    }
  `}
`

export const MenuNav = styled.div`
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    border-bottom: 2px solid ${theme.colors.primary}
  `}
`