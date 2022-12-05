import { FC } from "react"
import { ButtoMUIProps } from "./ButtonMUI.props"

export const ButtonMUIComponent: FC<ButtoMUIProps> = ({title, onClick}) => {
    return (<button onClick={onClick}>{title}</button>)
}