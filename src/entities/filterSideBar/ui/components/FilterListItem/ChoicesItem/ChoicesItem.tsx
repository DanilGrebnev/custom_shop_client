'use client'

import { ChangeEvent, FC, useCallback } from 'react'
import { IFilterItemChoices } from '@/app/types/filters'
import { useOnChangeListFilter } from '@/entities/filterSideBar/model/hooks/useOnChangeListFilter'
import { useSetValueInRedux } from '../../../../model/hooks/useSetValueInRedux'
import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { ColorCheckBox } from '@/shared/ui/CheckBoxes/ColorCheckBox'
import { RatingCheckBox } from '@/shared/ui/CheckBoxes/RatingCheckBox'
import {
    ICheckBox,
    IColorCheckBox,
    IRatingCheckBox,
} from '@/shared/ui/CheckBoxes/CheckBoxTypes'
import { v4 } from 'uuid'

interface IChoiceItem {
    code: string
    choicesItem: IFilterItemChoices
}

interface CheckBoxItem extends IChoiceItem {
    Component: FC<ICheckBox | IColorCheckBox | IRatingCheckBox>
}

interface FilterCheckBox extends IChoiceItem {
    children?: IFilterItemChoices[] | []
}

const CheckBoxProvider: FC<CheckBoxItem> = (props) => {
    const { choicesItem, code, Component } = props
    const onChangeListFilter = useOnChangeListFilter()

    const name = choicesItem.label
    const inputLabel = choicesItem.label

    const [thisInput, setValueInRedux] = useSetValueInRedux({ name })

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChangeListFilter(e, {
                value: e.target.value,
                name: code,
            })
            /*
                Дублирует состояние в редакс 
                для сохранения состояния между 
                страницами 
            */
            setValueInRedux(e)
        },
        [code, setValueInRedux, onChangeListFilter]
    )

    const properties = {
        onChange,
        checked: thisInput?.checked || false,
        name: name,
        label: inputLabel,
        value: choicesItem,
        labelcolor: choicesItem,
        rating: choicesItem,
    }

    return <Component {...properties} />
}

export const FilterCheckBox: FC<IChoiceItem> = (props) => {
    const { choicesItem, code } = props

    const onChangeListFilter = useOnChangeListFilter()
    const name = choicesItem.label
    const inputLabel = choicesItem.label
    const [thisInput, setValueInRedux] = useSetValueInRedux({ name })

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChangeListFilter(e, {
                value: e.target.value,
                name: code,
            })
            setValueInRedux(e)
        },

        [code, setValueInRedux, onChangeListFilter]
    )

    const properties = {
        onChange,
        checked: thisInput?.checked || false,
        name: name,
        label: inputLabel,
        value: choicesItem,
        labelcolor: choicesItem,
        rating: choicesItem,
    }

    return <CheckBox {...properties} />
}

export const FilterColorCheckBox: FC<IChoiceItem> = (props) => {
    return (
        <CheckBoxProvider
            {...props}
            Component={ColorCheckBox}
        />
    )
}

export const FilterRatingCheckBox: FC<IChoiceItem> = (props) => {
    return (
        <CheckBoxProvider
            {...props}
            Component={RatingCheckBox}
        />
    )
}
