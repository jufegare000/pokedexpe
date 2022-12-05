import { FC } from "react";
import { ButtonAgnosticProps } from "./BunttonAgnostic.props";

export const ButtonAgnosticComponet: FC<ButtonAgnosticProps> = ({name, click}) => {
    return (<button onClick={click}>{name}</button>)
}