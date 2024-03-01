import { ChangeEvent } from 'react'

import { useAppSelector } from '@/shared/hooks'
import { RangeFilter } from '@/shared/ui/RangeFilter'

import { useRange } from '../../../../model/hooks/useRange'
import { ProductSelectors } from '../../../../model/selectors/productSelectors'
import { IRangeFilters } from '../../../../model/types/productListTypes'

type RangeFilterProps = Parameters<typeof RangeFilter>[0]
type Props = Omit<RangeFilterProps, 'onChange1' | 'onChange2'>

export const CustomRangeFilter = (props: Props) => {
    const { filter } = props
    const id = filter.label

    const key1 = filter.code + '_min'
    const key2 = filter.code + '_max'

    const { onChange1, onChange2 } = useRange({
        id,
        key1,
        key2,
        value1: '',
        value2: '',
        label: filter.label,
    })

    const currentFilter = useAppSelector((state) =>
        ProductSelectors.getFilterById(state)(id)
    ) as IRangeFilters | undefined

    const onChange =
        (e: ChangeEvent<HTMLInputElement>, value: string) =>
        (callback: (name: string, value: string) => void) => {
            callback(e.target.name, value)
        }

    return (
        <RangeFilter
            {...props}
            name1={key1}
            name2={key2}
            value1={currentFilter?.value1 || ''}
            value2={currentFilter?.value2 || ''}
            onChange1={(...arg) => onChange(...arg)(onChange1)}
            onChange2={(...arg) => onChange(...arg)(onChange2)}
        />
    )
}
