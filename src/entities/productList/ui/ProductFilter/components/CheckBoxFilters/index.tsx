import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { ColorCheckBox } from '@/shared/ui/CheckBoxes/ColorCheckBox'
import { RatingCheckBox } from '@/shared/ui/CheckBoxes/RatingCheckBox'

import { useChecked } from '../../../../model/hooks/useChecked'

export const CustomCheckBox = (props: Parameters<typeof CheckBox>[0]) => {
    const { id } = props
    const { currentFilter, onChange } = useChecked({ id })

    return (
        <CheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}

export const CustomColorCheckBox = (
    props: Parameters<typeof ColorCheckBox>[0]
) => {
    const { id } = props
    const { currentFilter, onChange } = useChecked({ id })

    return (
        <ColorCheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}

export const CustomRatingCheckBox = (
    props: Parameters<typeof RatingCheckBox>[0]
) => {
    const { id } = props
    const { currentFilter, onChange } = useChecked({ id })

    return (
        <RatingCheckBox
            {...props}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}
