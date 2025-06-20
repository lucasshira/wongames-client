import { useState } from 'react'

import * as S from './styles'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon as SearchIcon,
  ListIcon as MenuIcon,
  XIcon as CloseIcon
} from '@phosphor-icons/react'

import Logo from '../Logo'
import Button from '../Button'

interface MenuProps {
  username?: string
}

function Menu({ username }: MenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <S.Wrapper aria-label="menu">
      <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
        <MenuIcon size={24} aria-label="Open Menu" />
      </S.IconWrapper>

      <S.LogoWrapper role="img" aria-label="Won Games Logo">
        <Logo isHideOnMobile aria-label="Logo" />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon size={24} aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon size={24} aria-label="Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull isOpenMenu={isOpenMenu} aria-hidden={!isOpenMenu}>
        <CloseIcon
          size={24}
          onClick={() => setIsOpenMenu(false)}
          aria-label="Close Menu"
        />
        <S.MenuNav>
          <S.MenuLink href="/" aria-label="Home">
            Home
          </S.MenuLink>
          <S.MenuLink href="/store" aria-label="Store">
            Store
          </S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="/me" aria-label="Account">
                My account
              </S.MenuLink>
              <S.MenuLink href="/wishlist" aria-label="Wishlist">
                Wishlist
              </S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button size="large" isFullWidth aria-label="Log In">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount
              href="/sign-up"
              aria-label="Sign Up"
              title="Sign Up"
            >
              Sign up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
