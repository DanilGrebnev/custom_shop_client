'use client'

import { memo } from 'react'

import { productActions } from '@/entities/product'

import { useAppDispatch } from '@/shared/hooks'
import { CheckBox } from '@/shared/ui/CheckBox'

import { RatingLabel } from '../RatingLabel/RatingLabel'

type Props = {
    id?: string
    slug: string
} & Omit<Parameters<typeof CheckBox>[0], 'onChange'>

export const CustomCheckBoxFilter = memo((props: Props) => {
    const { id, slug, label, value, ...otherProps } = props
    const dispatch = useAppDispatch()

    const onChange = (_: any) => {
        dispatch(
            productActions.toggleChecked({
                id,
                slug,
            })
        )
    }

    return (
        <CheckBox
            {...otherProps}
            value={value}
            label={
                slug === 'rating' ? (
                    <RatingLabel amount={Number(value) || 0} />
                ) : (
                    label
                )
            }
            onChange={onChange}
        />
    )
})

CustomCheckBoxFilter.displayName = 'CustomCheckBoxFilter'
