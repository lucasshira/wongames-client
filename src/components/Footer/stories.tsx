import type { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs']
} as Meta<typeof Footer>

export const Default: StoryObj<typeof Footer> = {
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer />
    </div>
  )
}
