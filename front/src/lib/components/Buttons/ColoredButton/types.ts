export interface IPaddings {
  vertical: number;
  horizontal: number;
}

export interface IColoredButtonProps {
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  text: string;
  padding?: IPaddings;
}

export interface IButtonProps {
  color: string;
  background: string;
  paddings: IPaddings;
}
