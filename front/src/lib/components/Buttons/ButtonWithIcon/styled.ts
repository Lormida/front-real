import styled from 'styled-components';

import { IButtonProps } from '@/lib/components/Buttons/ColoredButton/types';
import { theme } from '@/theme/theme';

export const Button = styled.button<IButtonProps>`
  position: relative;
  color: ${({ color }) => color};
  border-radius: 10px;
  border: none;
  background: ${({ background }) => background};
  padding: ${({ paddings }) =>
    `${paddings.vertical}px ${paddings.horizontal}px`};
  text-align: center;
`;

export const Image = styled.img`
  position: absolute;
  top: ${theme.spaces.ss}px;
  left: ${theme.spaces.m}px;
  width: ${theme.spaces.m}px;
  height: ${theme.spaces.m}px;
`;
