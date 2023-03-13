import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonWithIcon } from '.';
import { IButtonWithIconProps } from './types';

export default {
  title: 'Buttons/ButtonWithIcon',
  component: ButtonWithIcon,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: '#1E1F27' }],
    },
  },
} as ComponentMeta<typeof ButtonWithIcon>;

const Template: ComponentStory<typeof ButtonWithIcon> = (
  args: IButtonWithIconProps
) => <ButtonWithIcon {...args} />;

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
