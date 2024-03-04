import { ChangeEvent } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { RangeFilter } from '@/shared/ui/RangeFilter'

import { useRange } from '../../../../model/hooks/useRange'
import { ProductSelectors } from '../../../../model/selectors/productSelectors'
import { IRangeFilters } from '../../../../model/types/productListTypes'

type Props = {
    id: string
}

export const CustomRangeFilter = ({ id }: Props) => {
    const { onChange1, onChange2, value1, value2 } = useRange({ id })

    const onChange =
        (e: ChangeEvent<HTMLInputElement>) =>
        (callback: (value: string) => void) => {
            callback(e.target.value)
        }

    return (
        <RangeFilter
            value1={value1 || ''}
            value2={value2 || ''}
            
            onChange1={(e) => onChange(e)(onChange1)}
            onChange2={(e) => onChange(e)(onChange2)}
        />
    )
}
