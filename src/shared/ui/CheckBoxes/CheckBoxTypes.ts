import { ReactNode } from 'react'

import { IFilterItemChoices } from '@/app/types/filters'

import { Checkbox } from '@mui/material'

export type TCheckBoxArguments = Parameters<typeof Checkbox>[0] & {
    choicesItem?: IFilterItemChoices
}

export interface ICheckBox extends TCheckBoxArguments {
    label?: ReactNode
    children?: ReactNode
    defChecked?: boolean
}

export interface IColorCheckBox extends TCheckBoxArguments {
    labelcolor?: string
}

export interface IRatingCheckBox extends TCheckBoxArguments {
    rating?: string
}
