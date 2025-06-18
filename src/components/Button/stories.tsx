import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
}
