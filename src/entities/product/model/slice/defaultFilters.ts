import { Choice, type FilterType } from '@/app/types/product'

export const defaultFilters = [
    {
        id: 'ratingId',
        categoryId: 'category-rating-id',
        name: 'Рейтинг',
        slug: 'rating',
        type: 'multiple_choices' as FilterType,
        choices: [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
        ] as Choice[],
    },
]
