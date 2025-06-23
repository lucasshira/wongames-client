import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

import { ShoppingCartIcon } from '@phosphor-icons/react'

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string'
    },
    icon: { control: false }
  }
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
}

export const withIcon: StoryObj<typeof Button> = {
  args: {
    children: 'Add to cart',
    icon: (
      <span>
        <ShoppingCartIcon size={18} />
      </span>
    )
  },
  render: (args) => <Button size="small" {...args} />
}

export const asLink: StoryObj<typeof Button> = {
  args: {
    children: 'Add to cart',
    as: 'a'
  },
  render: (args) => <Button size="large" as="a" {...args} />
}
