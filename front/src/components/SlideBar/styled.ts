import styled from 'styled-components';

import { ISlideBar } from './interfaces';

export const Body = styled.div<ISlideBar>`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  max-width: ${({ theme }) => theme.spaces.xxx}px;
  height: 100%;
  transform: ${({ isShown }) =>
    isShown ? 'translateX(0%)' : 'translateX(100%)'};
  transition: all 0.5s;
`;
