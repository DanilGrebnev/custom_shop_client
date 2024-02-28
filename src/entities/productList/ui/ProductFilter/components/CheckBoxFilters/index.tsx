import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { ColorCheckBox } from '@/shared/ui/CheckBoxes/ColorCheckBox'
import { RatingCheckBox } from '@/shared/ui/CheckBoxes/RatingCheckBox'

import { IProductFilterChoicesItem } from '@/app/types/product'

import { useChecked } from '../../../../model/hooks/useChecked'

type TUrlParams = { urlparams: { key: string; value: string } }

export const CustomCheckBox = (
    props: Parameters<typeof CheckBox>[0] & {
        choice: IProductFilterChoicesItem
    }
) => {
    const { id, choice } = props

    const { currentFilter, onChange } = useChecked({
        id,
        key: choice.code,
        value: choice.value,
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
    props: Parameters<typeof ColorCheckBox>[0] & TUrlParams
) => {
    const { id, urlparams } = props
    const { currentFilter, onChange } = useChecked({ id, ...urlparams })

    return (
        <ColorCheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}

export const CustomRatingCheckBox = (
    props: Parameters<typeof RatingCheckBox>[0] & TUrlParams
) => {
    const { id, urlparams } = props
    const { currentFilter, onChange } = useChecked({ id, ...urlparams })

    return (
        <RatingCheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}
