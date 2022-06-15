export interface ISort{
    id: number
    name: string,
    title: string
}

export interface sortState{
    sortArray: ISort[],
    active: number
}