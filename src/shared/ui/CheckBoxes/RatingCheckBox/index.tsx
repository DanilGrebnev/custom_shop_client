import { FC } from 'react'
import { IRatingCheckBox } from '../CheckBoxTypes'
import { CheckBox } from '../CheckBox'
import { Rating } from '@/shared/ui/Rating'

export const RatingCheckBox: FC<IRatingCheckBox> = (props) => {
    const { rating, ...other } = props

    return (
        <CheckBox
            {...other}
            label={<Rating rating={Number(rating)} />}
        />
    )
}
