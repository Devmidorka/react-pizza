import {ProductFiltersProps} from "./ProductFilters";

export interface ProductProps{
    id:number,
    img: string,
    title: string,
    price: number,
    count?:number,
    filters:ProductFiltersProps
}