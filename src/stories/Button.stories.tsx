import React from 'react';
import { MANTINE_SIZES, MANTINE_COLORS } from '@mantine/styles';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@mantine/core';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: MANTINE_SIZES,
      },
    },
    loaderPosition: {
      control: {
        type: 'select',
        options: ['right', 'left'],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: MANTINE_SIZES,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'filled',
          'outline',
          'light',
          'gradient',
          'white',
          'default',
          'subtle',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: MANTINE_COLORS,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>버튼</Button>
);

export const Basic = Template.bind({});

Basic.args = {
  variant: 'filled',
  size: 'md',
  color: 'teal',
  disabled: false,
  compact: false,
  loading: false,
  loaderPosition: 'right',
  fullWidth: false,
};
