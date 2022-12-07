import { ButtonSize } from "./ButtonSize.type";

export interface ButtonExampleProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
}