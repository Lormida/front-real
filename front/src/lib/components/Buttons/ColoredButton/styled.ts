import styled from 'styled-components';

import { theme } from '@/theme/theme';

import { IButtonProps } from './types';

export const Button = styled.button<IButtonProps>`
  background: ${({ background }) => background};
  padding: ${({ paddings }) =>
    `${paddings.vertical}px ${paddings.horizontal}px`};
  color: ${({ color }) => color};
  border-radius: 10px;
  font-weight: ${theme.fontWeights.s};
  font-size: ${theme.fonts.ss}px;
  line-height: ${theme.lineHeights.s}px;
  border: none;
  outline: none;
  cursor: pointer;
  width: ${theme.spaces.x}%;
  text-align: center;
`;
