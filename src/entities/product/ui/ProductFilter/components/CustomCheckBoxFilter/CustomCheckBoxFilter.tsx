'use client'

import { ChangeEvent, memo } from 'react'

import { productActions } from '@/entities/product'

import { useActionCreators } from '@/shared/hooks/useActionCreators'
import { CheckBox } from '@/shared/ui/CheckBox'

type Props = {
    id?: string
    slug: string
} & Omit<Parameters<typeof CheckBox>[0], 'onChange'>

export const CustomCheckBoxFilter = memo((props: Props) => {
    const { id, slug, ...otherProps } = props

    const actions = useActionCreators(productActions)

    const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        actions.toggleChecked({
            id,
            name: e.target.name,
            value: e.target.value,
            checked: checked,
            slug,
        })
    }

    return (
        <CheckBox
            {...otherProps}
            onChange={onChange}
        />
    )
})

CustomCheckBoxFilter.displayName = 'CustomCheckBoxFilter'
