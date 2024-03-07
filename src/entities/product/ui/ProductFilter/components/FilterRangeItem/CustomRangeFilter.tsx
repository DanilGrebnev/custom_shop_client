import { ChangeEvent } from 'react'

import { RangeFilter } from '@/shared/ui/RangeFilter'

import { useRange } from '../../../../model/hooks/useRange'

type Props = {
    id: string
}

export const CustomRangeFilter = ({ id }: Props) => {
    const { filter, onChange1, onChange2, value1, value2 } = useRange({ id })

    const onChange =
        (e: ChangeEvent<HTMLInputElement>) =>
        (callback: (value: string) => void) => {
            callback(e.target.value)
        }

    return (
        <RangeFilter
            value1={value1 || ''}
            value2={value2 || ''}
            label1={filter?.label_min}
            label2={filter?.label_max}
            onChange1={(e) => onChange(e)(onChange1)}
            onChange2={(e) => onChange(e)(onChange2)}
        />
    )
}
