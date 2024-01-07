import { FC } from 'react'
import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'
import StarIcon from '/public/static/icons/star-icon.svg'

import clsx from 'clsx'
import s from './Rating.module.scss'

interface IRatingProps {
    className?: string
    rating?: number
}

export const Rating: FC<IRatingProps> = (props) => {
    const { rating = 0, className } = props

    return (
        <div className={clsx(s.rating, className)}>
            <CreateArrayAndFill amount={rating}>
                <StarIcon className={s['rating-icon']} />
            </CreateArrayAndFill>
        </div>
    )
}

Rating.displayName = 'Rating'
