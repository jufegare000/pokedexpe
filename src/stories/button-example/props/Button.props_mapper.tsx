import ButtonCalculatedProps from "./Button.calculated_props";
import ButtonProps from "./Button.props";

export const mergeProps = (oldProps: ButtonProps, newProps: ButtonCalculatedProps): ButtonProps => {
    const {label, backgroundColor, onClick, primary} = oldProps
    const {mode, className, actualSize} = newProps;
    return {
        size: actualSize,
        label: label,
        backgroundColor: backgroundColor,
        mode: mode,
        onClick:onClick,
        primary: primary,
        className: className
    }
}