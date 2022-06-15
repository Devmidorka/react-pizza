
export interface ICategory{
    id:number,
    title: string
}

export interface CategoryProps{
    title: string,
    className?: string,
    onClick: () => void
}