'use client'

import { ChangeEvent, FC, useCallback, memo } from 'react'
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

interface IChoiceItem {
    code: string
    choicesItem: IFilterItemChoices
}

interface CheckBoxItem extends IChoiceItem {
    Component: FC<ICheckBox | IColorCheckBox | IRatingCheckBox>
}

const CheckBoxItem: FC<CheckBoxItem> = (props) => {
    const { choicesItem, code, Component } = props
    const onChangeListFilter = useOnChangeListFilter()

    const inputName = choicesItem.label
    const inputLabel = choicesItem.label

    const [thisInput, setValueInRedux] = useSetValueInRedux({ name: inputName })

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target
            const name = code
            onChangeListFilter(e, { value, name })
            setValueInRedux(e)
        },
        [code, setValueInRedux, onChangeListFilter]
    )

    return (
        <Component
            onChange={onChange}
            checked={thisInput?.checked || false}
            name={inputName}
            label={inputLabel}
            value={choicesItem.value}
            labelcolor={choicesItem.value}
            rating={choicesItem.value}
        />
    )
}

export const ChoicesItemCheckBox: FC<IChoiceItem> = (props) => {
    return (
        <CheckBoxItem
            {...props}
            Component={CheckBox}
        />
    )
}

export const ChoicesItemColorCheckBox: FC<IChoiceItem> = (props) => {
    return (
        <CheckBoxItem
            {...props}
            Component={ColorCheckBox}
        />
    )
}

export const ChoicesItemRatingCheckBox: FC<IChoiceItem> = (props) => {
    return (
        <CheckBoxItem
            {...props}
            Component={RatingCheckBox}
        />
    )
}
