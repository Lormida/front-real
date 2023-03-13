import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import LogoIcon from '@/assets/icons/Logo.svg';
import SettingsIcon from '@/assets/icons/Settings.svg';
import { navBarRoutes } from '@/constants/config';
import { ColoredButton } from '@/lib';

import { SlideBar } from '../SlideBar';
import {
  Body,
  ButtonContainer,
  Container,
  Icon,
  LinksContainer,
  LogoContainer,
  ProfileContainer,
  Setting,
  StyledLick,
} from './styled';

export const Header = () => {
  const {
    colors: { white, orange },
    spaces: { mss },
    breakPoints: { mobile },
  } = useContext(ThemeContext);

  const { pathname } = useLocation();
  const isAuth = false;
  const isMobile = useMediaQuery({ query: `(max-width: ${mobile}px )` });
  const isButtonsShown = !isAuth && !isMobile;

  const [isSlideBarShown, setIsSlideBarShown] = useState(false);

  const handleSettings = () => {
    setIsSlideBarShown((prev) => !prev);
  };

  return (
    <Body>
      <Container>
        <LogoContainer>
          <Icon src={LogoIcon} />
          {!isMobile && (
            <LinksContainer>
              {navBarRoutes.map(({ name, path }) => (
                <StyledLick to={path} isActive={pathname === path}>
                  {name}
                </StyledLick>
              ))}
            </LinksContainer>
          )}
        </LogoContainer>
        <ProfileContainer isLogged={isAuth}>
          {isButtonsShown && (
            <>
              <ButtonContainer>
                <ColoredButton
                  backgroundColor={orange}
                  color={white}
                  text="Sing up"
                  padding={{ vertical: 0, horizontal: mss }}
                />
              </ButtonContainer>
              <ButtonContainer>
                <ColoredButton
                  text="Sing in"
                  padding={{ vertical: 0, horizontal: mss }}
                />
              </ButtonContainer>
            </>
          )}
          <Setting src={SettingsIcon} onClick={handleSettings} />
          <SlideBar isShown={isSlideBarShown} toggle={handleSettings} />
        </ProfileContainer>
      </Container>
    </Body>
  );
};
