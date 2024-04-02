import { ChangeEvent } from 'react'

import { productActions } from '@/entities/product'

import { useAppDispatch } from '@/shared/hooks'
import { DropDown } from '@/shared/ui/DropDown'

import type { RangeFilter as RangeFilterType } from '@/app/types/product'

import s from './RangeFilter.module.scss'

interface Props extends RangeFilterType {
    id: string
}

export const RangeFilter = (props: Props) => {
    const { name, range, id } = props
    const [item1, item2] = Object.entries(range)

    const dispatch = useAppDispatch()

    const onChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        dispatch(productActions.changeRangeValue({ name, value, id }))
    }

    const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        dispatch(productActions.changeRangeValue({ name, value, id }))
    }

    return (
        <DropDown label={name}>
            <div className={s.wrapper}>
                <input
                    name={item1[0]}
                    value={item1[1]}
                    placeholder="от"
                    onChange={onChange1}
                />
                <input
                    name={item2[0]}
                    value={item2[1]}
                    placeholder="до"
                    onChange={onChange2}
                />
            </div>
        </DropDown>
    )
}
