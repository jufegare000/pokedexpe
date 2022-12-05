
import ButtonCalculatedProps from "./props/Button.calculated_props";
import ButtonProps from "./props/Button.props";
import { mergeProps } from "./props/Button.props_mapper"
import { ButtonSizeProps } from "./props/Button.size.props";

const STORYBOOK_BUTTON_MODE_BASE: string = "storybook-button--";
const STORYBOOK_CLASSNAME: string = 'storybook-button'

export const getButtonMode = (primary: boolean | undefined): string => {
    const PRIMARY_TEXT_CLASSPROPERY = 'primary'
    const SECONDARY_TEXT_CLASSPROPERY = 'secondary'

    const className: string = primary ? STORYBOOK_BUTTON_MODE_BASE + PRIMARY_TEXT_CLASSPROPERY :
        STORYBOOK_BUTTON_MODE_BASE + SECONDARY_TEXT_CLASSPROPERY
    return className;
}

export const getClassName = (mode: string, actualSize: string): string => {
    const storyButtonClassName: string = [STORYBOOK_CLASSNAME, STORYBOOK_CLASSNAME + "--" +
        actualSize, mode].join(' ');
    return storyButtonClassName;
}

export const getActualSize = (size: ButtonSizeProps | undefined): ButtonSizeProps => {
    return size ? size : 'medium'
}

export const getDefaultProps = (buttonProps: ButtonProps): ButtonProps => {
    const { primary, size } = buttonProps

    const actualSize: ButtonSizeProps = getActualSize(size);
    const mode: string = getButtonMode(primary);
    const className = getClassName(mode, actualSize);
    const newProps = mapNewProps(actualSize, mode, className)

    return mergeProps(buttonProps, newProps);
}

export const mapNewProps = (actualSize: ButtonSizeProps, mode: string, className: string): ButtonCalculatedProps => {
    return {
        actualSize: actualSize,
        mode: mode,
        className: className
    }
}
