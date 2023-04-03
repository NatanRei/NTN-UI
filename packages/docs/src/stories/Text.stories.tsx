import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ntn-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ab! Nesciunt modi inventore amet! Aperiam, minima veniam. Nemo dolorem',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
