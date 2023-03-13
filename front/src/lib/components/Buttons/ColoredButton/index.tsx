import React from 'react';

import { Button } from './styled';
import { IColoredButtonProps } from './types';

export const ColoredButton = ({
  backgroundColor = '#fff',
  color = '#000',
  onClick,
  text,
  padding = { vertical: 10, horizontal: 50 },
}: IColoredButtonProps) => (
  <Button
    color={color}
    background={backgroundColor}
    onClick={onClick}
    paddings={padding}
  >
    {text}
  </Button>
);
