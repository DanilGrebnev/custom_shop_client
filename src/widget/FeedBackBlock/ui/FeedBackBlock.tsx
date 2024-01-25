import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer/ui/FullWidthContainer'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { FeedBackCard } from '@/shared/ui/Cards'

import { IComment } from '@/app/types/comments'

interface IFeedBackBlockProps {
    comments: IComment[]
}

export const FeedBackBlock: FC<IFeedBackBlockProps> = (props) => {
    const { comments } = props

    return (
        <div
            id="Feed-back block"
            className={'mr-top'}>
            <FullWidthContainer>
                <ContainerWithTitle title="Отзывы покупателей">
                    <Slider
                        breakpoints="feedback-slider"
                        spaceBetween={20}
                        theme="theme2">
                        {comments.map(({ ...props }, i) => {
                            return (
                                <FeedBackCard
                                    key={i}
                                    {...props}
                                />
                            )
                        })}
                    </Slider>
                </ContainerWithTitle>
            </FullWidthContainer>
        </div>
    )
}
