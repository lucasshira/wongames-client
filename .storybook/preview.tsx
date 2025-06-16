import { ThemeProvider } from 'styled-components'
import GlobaStyle from '../src/styles/global'

import theme from '@/styles/theme'

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={theme}>
      <GlobaStyle />
      <Story />
    </ThemeProvider>
  )
]
