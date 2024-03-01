import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { ColorCheckBox } from '@/shared/ui/CheckBoxes/ColorCheckBox'
import { RatingCheckBox } from '@/shared/ui/CheckBoxes/RatingCheckBox'

import { IProductChoiceFilter } from '@/app/types/product'

import { useChecked } from '../../../../model/hooks/useChecked'

type TUrlParams = { urlparams: { key: string; value: string } }

export const CustomCheckBox = (
    props: Parameters<typeof CheckBox>[0] & {
        filter: IProductChoiceFilter
    }
) => {
    const { id = '', filter } = props

    const { currentFilter, onChange } = useChecked({
        id,
        key: filter.code,
        value: filter.value,
        label: filter.label,
    })

    return (
        <CheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}

export const CustomColorCheckBox = (
    props: Parameters<typeof ColorCheckBox>[0] &
        TUrlParams & {
            filter: IProductChoiceFilter
        }
) => {
    const { id = '', urlparams, filter } = props
    const { currentFilter, onChange } = useChecked({
        id,
        label: filter.label,
        ...urlparams,
    })

    return (
        <ColorCheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}

export const CustomRatingCheckBox = (
    props: Parameters<typeof RatingCheckBox>[0] &
        TUrlParams & {
            filter: IProductChoiceFilter
        }
) => {
    const { id = '', urlparams, filter } = props
    const { currentFilter, onChange } = useChecked({
        id,
        label: filter.label,
        ...urlparams,
    })

    return (
        <RatingCheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}
