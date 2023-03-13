import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColoredButton } from '.';
import { IColoredButtonProps } from './types';

export default {
  title: 'Buttons/ColoredButton',
  component: ColoredButton,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: '#1E1F27' }],
    },
  },
} as ComponentMeta<typeof ColoredButton>;

const Template: ComponentStory<typeof ColoredButton> = (
  args: IColoredButtonProps
) => <ColoredButton {...args} />;

export const White = Template.bind({});

White.args = {
  text: '501 Not Implemented',
};

export const Orange = Template.bind({});

Orange.args = {
  text: '501 Not Implemented',
  color: '#fff',
  backgroundColor: '#D98639',
};
