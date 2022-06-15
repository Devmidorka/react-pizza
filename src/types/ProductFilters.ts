export enum ProductSizes {
    small = 26,
    medium = 30,
    large = 40
}

export interface ProductFiltersProps{
    types: number[],
    sizes: number[]
}