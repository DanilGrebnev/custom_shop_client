import type { ChoiceFilter, RangeFilter } from '@/app/types/product'

import { v4 } from 'uuid'

export const defaultFilters: (ChoiceFilter | RangeFilter)[] = [
    {
        id: v4(),
        categoryId: v4(),
        name: 'Рейтинг',
        slug: 'rating',
        type: 'multiple_choices',
        choices: [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
        ],
    } as ChoiceFilter,
    {
        id: v4(),
        categoryId: v4(),
        name: 'Цена',
        slug: 'price',
        type: 'range',
        range: { min_price: 0, max_price: 0 },
    },
]
