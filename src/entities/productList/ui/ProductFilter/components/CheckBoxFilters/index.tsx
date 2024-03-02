import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { ColorCheckBox } from '@/shared/ui/CheckBoxes/ColorCheckBox'
import { RatingCheckBox } from '@/shared/ui/CheckBoxes/RatingCheckBox'

import { useChecked } from '../../../../model/hooks/useChecked'

type ICheckBoxProps = Parameters<typeof CheckBox>[0] & {
    id: string
}

export const CustomCheckBox = (props: ICheckBoxProps) => {
    const { id = '' } = props

    const { currentFilter, onChange } = useChecked(id)

    return (
        <CheckBox
            label={currentFilter.label}
            checked={currentFilter?.checked || false}
            onChange={onChange}>
            {props.children}
        </CheckBox>
    )
}

export const CustomColorCheckBox = (
    props: ICheckBoxProps & { labelcolor: string }
) => {
    const { id = '' } = props
    const { currentFilter, onChange } = useChecked(id)

    return (
        <ColorCheckBox
            labelcolor={currentFilter.label}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}

export const CustomRatingCheckBox = (
    props: ICheckBoxProps & { rating: string }
) => {
    const { id = '' } = props

    const { currentFilter, onChange } = useChecked(id)

    return (
        <RatingCheckBox
            rating={currentFilter.label}
            checked={currentFilter?.checked || false}
            onChange={onChange}
        />
    )
}
