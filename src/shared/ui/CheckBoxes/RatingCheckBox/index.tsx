import { FC } from 'react'

import { Rating } from '@/shared/ui/Rating'

import { CheckBox } from '../CheckBox'
import { IRatingCheckBox } from '../CheckBoxTypes'

export const RatingCheckBox: FC<IRatingCheckBox> = (props) => {
    const { rating, id, ...other } = props

    return (
        <CheckBox
            {...other}
            id={id}
            label={<Rating rating={Number(rating)} />}
        />
    )
}
