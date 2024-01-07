export interface IFilterItemChoices {
    label: string
    value: string
}

export type IFilterItemCode = 'color' | 'rating' | string

interface IFilter {
    code: IFilterItemCode
    label: string
    type: 'multiple_choices' | 'number' | 'choices'
}

interface IFilterItemNumber extends IFilter {
    min_value?: number
    max_value?: number
    measure?: string
}

interface IFilterItemList extends IFilter {
    choices?: IFilterItemChoices[]
}

export type IFilterItem = IFilterItemNumber & IFilterItemList
