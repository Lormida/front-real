import React from 'react';

import { Button, Image } from './styled';
import { IButtonWithIconProps } from './types';

export const ButtonWithIcon = ({
  icon,
  text,
  backgroundColor = '#fff',
  color = '#000',
  onClick,
  padding = { horizontal: 57, vertical: 14 },
  alt,
  title,
}: IButtonWithIconProps) => (
  <Button
    paddings={padding}
    color={color}
    background={backgroundColor}
    onClick={onClick}
  >
    <Image src={icon} title={title} alt={alt} />
    {text}
  </Button>
);

export { Button };
