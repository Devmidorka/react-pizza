import {ProductFiltersProps} from "./ProductFilters";

export interface ProductProps{
    img: string,
    title: string,
    price: number,
    count?:number,
    filters:ProductFiltersProps
}