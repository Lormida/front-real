import { IPaddings } from '@/lib/components/Buttons/ColoredButton/types';

export interface IButtonWithIconProps {
  color?: string;
  icon: string;
  backgroundColor?: string;
  onClick?: () => void;
  text: string;
  padding?: IPaddings;
  alt: string;
  title: string;
}
