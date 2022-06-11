import React from 'react';
import {ListProps} from "../types/List";

export default function List<T>(props: ListProps<T>){
    return(
        <>
            {props.items.map(props.renderItem)}
        </>
    )
}