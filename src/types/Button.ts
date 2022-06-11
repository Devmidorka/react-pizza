import {ReactNode, MouseEvent} from "react";

export enum ButtonType{
    ADD,
    CATEGORY,
    HALF_BUTTON

}

export interface ButtonProps{
    children?: ReactNode,
    className?: string,
    type: ButtonType,
    count?: number,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => any
    leftContent?: ReactNode,
    rightContent?: ReactNode
}