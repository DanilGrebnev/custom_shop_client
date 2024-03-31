import { FC, memo } from 'react'

import { CreateArrayAndFill } from '@/shared/HOC/CreateArrayAndFill'

import s from './Rating.module.scss'
import StarIcon from '/public/static/icons/star-icon.svg'

import clsx from 'clsx'

interface IRatingProps {
    className?: string
    rating?: number
}

export const Rating: FC<IRatingProps> = memo((props) => {
    const { rating = 0, className } = props

    return (
        <div className={clsx(s.rating, className)}>
            <CreateArrayAndFill amount={rating}>
                <StarIcon className={s['rating-icon']} />
            </CreateArrayAndFill>
        </div>
    )
})

Rating.displayName = 'Rating'
