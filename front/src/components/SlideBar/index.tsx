import { createPortal } from 'react-dom';

import { ISlideBar } from './interfaces';
import { Body } from './styled';

export const SlideBar = ({ isShown, toggle }: ISlideBar) =>
  createPortal(
    <Body isShown={isShown} onClick={toggle}>
      Not implemented
    </Body>,
    document.body
  );
