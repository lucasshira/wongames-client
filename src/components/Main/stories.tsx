import { Meta, StoryObj } from '@storybook/react'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Main>

export const Default: StoryObj<typeof Main> = {}

export const Basic: StoryObj<typeof Main> = {
  args: {
    title: 'Basic Main Title',
    description: 'Basic Main description'
  }
}
