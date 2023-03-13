import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ILoggedIn, IStyledLink } from './interfaces';

export const Body = styled.header`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  height: ${({ theme }) => theme.spaces.mm}px;
`;
export const Setting = styled.img`
  margin: 0 0 0 ${({ theme }) => theme.spaces.s}px;
  height: ${({ theme }) => theme.spaces.mm}px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.m}px
    ${({ theme }) => theme.spaces.mm}px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces.s}px 0 0
    ${({ theme }) => theme.spaces.mm}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    a {
      font-size: ${({ theme }) => theme.fonts.ss}px;
    }
  }
`;

export const StyledLick = styled(Link)<IStyledLink>`
  font-size: ${({ theme }) => theme.fonts.ss}px;
  margin: 0 0 0 ${({ theme }) => theme.spaces.m}px;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.orange : theme.colors.white};
`;

export const ProfileContainer = styled.div<ILoggedIn>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.s}px 0 0
    ${({ theme }) => theme.spaces.ss}px;
  max-width: ${({ theme, isLogged }) =>
    isLogged ? theme.spaces.mm : theme.spaces.xxxx}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    max-width: ${({ theme }) => theme.spaces.mm}px;
  }
`;

export const ButtonContainer = styled.div`
  button {
    word-break: keep-all;
    font-size: ${({ theme }) => theme.fonts.ss}px;
  }
`;
