import * as S from './styles'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon as SearchIcon,
  ListIcon as MenuIcon
} from '@phosphor-icons/react'

import Logo from '../Logo'

function Menu() {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon size={24} />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo isHideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon size={24} />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon size={24} />
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Wrapper>
  )
}

export default Menu
