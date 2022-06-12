import {IProduct} from "../Product";

export interface productState{
    products: IProduct[],
    fetching: boolean,
    error: string | null
}