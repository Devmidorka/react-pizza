import {ReactNode, MouseEvent} from "react";

export enum ButtonType{
    ADD,
    CATEGORY,
    HALF_BUTTON,
    ORANGE_BUTTON,
    SHADOW_BUTTON,
    PLUS_BUTTON,
    MINUS_BUTTON,
    DELETE_BUTTON,
    BLACK_BUTTON

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