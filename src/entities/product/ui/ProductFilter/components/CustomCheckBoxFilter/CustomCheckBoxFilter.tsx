import { ChangeEvent } from 'react'

import { productActions } from '@/entities/product'

import { useActionCreators } from '@/shared/hooks/useActionCreators'
import { CheckBox } from '@/shared/ui/CheckBox'

type Props = {
    id?: string
} & Omit<Parameters<typeof CheckBox>[0], 'onChange'>

export const CustomCheckBoxFilter = (props: Props) => {
    const { id, ...otherProps } = props

    const actions = useActionCreators(productActions)

    const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        actions.toggleChecked({
            id,
            name: e.target.name,
            value: e.target.value,
            checked: checked,
        })
        // console.log(e.target.name, checked)
    }

    return (
        <CheckBox
            {...otherProps}
            onChange={onChange}
        />
    )
}
