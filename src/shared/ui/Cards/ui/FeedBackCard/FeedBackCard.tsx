import { FC, ReactNode } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import s from './FeedBackCard.module.scss'
import { CardWrapper } from '../CardWrapper/CardWrapper'
import { IComment } from '@/app/types/comments'

interface IFeedBackCardProps extends IComment {
    className?: string
    img?: string
    children?: ReactNode
}

export const FeedBackCard: FC<IFeedBackCardProps> = (props) => {
    const { img, text, name, className, profession, children } = props

    if (!children) {
        return (
            <CardWrapper
                width="full"
                className={clsx(s['card-wrapper'], className)}>
                <p className={s['feedback-text']}>{text}</p>

                <div className={s['user']}>
                    <Image
                        alt="user"
                        src={img || '/static/icons/user.png'}
                        placeholder="empty"
                        width={60}
                        height={60}
                    />

                    <div className={s['user-info']}>
                        <p className={s['user_name']}>{name}</p>
                        <p className={s.profession}>{profession}</p>
                    </div>
                </div>
            </CardWrapper>
        )
    }

    return children
}
