import React, {FC} from 'react';
import {ButtonProps, ButtonType} from "../../types/Button";

const Button: FC<ButtonProps> = (
    {
        children,
        className,
        type,
        onClick,
        count,
        leftContent,
        rightContent,
        ...props
    }) => {

    function getClassByType(type:ButtonType):string {
        switch(type){
            case ButtonType.ADD: return 'add-button'
            case ButtonType.CATEGORY: return 'category-button'
            case ButtonType.HALF_BUTTON: return 'half-button'
            case ButtonType.ORANGE_BUTTON: return 'orange-button'
            case ButtonType.SHADOW_BUTTON: return 'shadow-button'
            case ButtonType.DELETE_BUTTON: return 'delete-button'
            case ButtonType.PLUS_BUTTON: return 'plus-button'
            case ButtonType.MINUS_BUTTON: return 'minus-button'
            case ButtonType.BLACK_BUTTON: return 'black-button'
            default: return ''
        }
    }

    return (
        <button
            className={ [className, getClassByType(type)].join(' ')}
            onClick = {onClick}
            {...props}
        >
            {type === ButtonType.ADD &&
                <span className='plus'>+</span>
            }
            {type === ButtonType.HALF_BUTTON &&
                <>
                    <div>{leftContent}</div>
                    <div className="divider"/>
                    <div>{rightContent}</div>
                </>

            }
            {children}

            {count && <span className='count'>{count}</span>}

        </button>
    );
};

export default Button;