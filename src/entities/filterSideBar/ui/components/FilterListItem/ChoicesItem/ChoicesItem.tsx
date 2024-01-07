'use client'

import { FC } from 'react'
import { IFilterItemChoices, IFilterItemCode } from '@/app/types/filters'
import { useOnChangeListFilter } from '@/entities/filterSideBar/model/hooks/useOnChangeListFilter'
import { CheckBox } from '@/shared/ui/CheckBox'
import { ColorCheckBox } from '@/shared/ui/ColorCheckBox'
import { Rating } from '@/shared/ui/Rating'

interface IChoiceItem {
    code: string
    choicesItem: IFilterItemChoices
}

export const ChoicesItemCheckBox: FC<IChoiceItem> = (props) => {
    const { choicesItem, code } = props
    const onChange = useOnChangeListFilter()

    return (
        <CheckBox
            onChange={onChange}
            name={code}
            label={choicesItem.label}
            value={choicesItem.value}
        />
    )
}

export const ChoicesItemColorCheckBox: FC<IChoiceItem> = (props) => {
    const { choicesItem, code } = props
    const onChange = useOnChangeListFilter()

    return (
        <ColorCheckBox
            onChange={onChange}
            name={code}
            color={choicesItem.label}
            value={choicesItem.value}
        />
    )
}

export const ChoicesItemRatingCheckBox: FC<IChoiceItem> = (props) => {
    const { choicesItem, code } = props
    const onChange = useOnChangeListFilter()

    return (
        <CheckBox
            onChange={onChange}
            name={code}
            label={<Rating rating={+choicesItem.label} />}
            value={choicesItem.value}
        />
    )
}
