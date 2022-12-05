import { FC } from "react";
import { ButtonAgnosticProps } from "./BunttonAgnostic.props";
import { ButtonMUIComponent } from "./ButtonMUI.component";

export const ButtonMUIAdapterComponent: FC<ButtonAgnosticProps> = ({name, click}) => {
    return(<ButtonMUIComponent title={name} onClick={click}></ButtonMUIComponent>)
}