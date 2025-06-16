import theme from '@/styles/theme'

// inferindo os tipos
type Theme = typeof theme

// extendendo a interface padrao com a nossa
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}