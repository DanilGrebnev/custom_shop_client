interface IFilter {
    label: string
    value: string
}

export interface IFilterItemChoices extends IFilter {
    children?: IFilter[]
}

export type IFilterItemCode = 'color' | 'rating'

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

export type IFilterItem = IFilterItemList & IFilterItemNumber
