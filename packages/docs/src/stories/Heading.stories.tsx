import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@ntn-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const H1Tag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
    size: '2xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          "O heading será h2 por default, para alterar, basta passar a propriedade 'as' como a tag de sua preferência (h1, h3, h4 ...).",
      },
    },
  },
}
