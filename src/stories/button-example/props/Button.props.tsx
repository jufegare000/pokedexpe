import { ButtonSizeProps } from "./Button.size.props";

export default interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: ButtonSizeProps;
    mode?: string,
    label: string;
    className?: string;
    onClick?: () => void;
}