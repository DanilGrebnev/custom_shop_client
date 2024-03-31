import Image from 'next/image'

import { CheckBox } from '@/shared/ui/CheckBox'
import { DropDown } from '@/shared/ui/DropDown'

import s from '../../ProductFilter.module.scss'

import { v4 } from 'uuid'

export const RatingFilter = () => {
    const a = Array(5).fill('')

    return (
        <DropDown
            title="Рейтинг"
            label="Рейтинг">
            <div className={s['filter-list']}>
                {a.map((_, i) => {
                    const amount = i + 1

                    return (
                        <CheckBox
                            className={s['choice-wrapper']}
                            key={i}
                            label={<Rating amount={amount} />}
                            title={'Рейтинг: ' + amount}
                        />
                    )
                })}
            </div>
        </DropDown>
    )
}

function Rating(props: { amount: number }) {
    return Array(props.amount)
        .fill('')
        .map(() => (
            <Image
                key={v4()}
                alt=""
                src={'/static/icons/star-icon.svg'}
                width={20}
                height={20}
            />
        ))
}
