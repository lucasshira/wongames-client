import GlobaStyle from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobaStyle />
      <Story />
    </>
  )
]
