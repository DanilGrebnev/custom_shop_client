import { memo } from 'react'

import Image from 'next/image'

import { v4 } from 'uuid'

export const RatingLabel = memo((props: { amount: number }) => {
    return Array(props.amount)
        .fill('')
        .map((_, i) => (
            <Image
                key={i}
                alt=""
                src={'/static/icons/star-icon.svg'}
                width={20}
                height={20}
            />
        ))
})
RatingLabel.displayName = 'RatingLabel'
