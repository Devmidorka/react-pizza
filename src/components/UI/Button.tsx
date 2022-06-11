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
        rightContent
    }) => {

    function getClassByType(type:ButtonType):string {
        switch(type){
            case ButtonType.ADD: return 'add-button'
            case ButtonType.CATEGORY: return 'category-button'
            case ButtonType.HALF_BUTTON: return 'half-button'
            default: return ''
        }
    }

    return (
        <button
            className={ [className, getClassByType(type)].join(' ')}
            onClick = {onClick}
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