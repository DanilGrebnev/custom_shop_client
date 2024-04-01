import { memo } from 'react'

import { ActiveFilterList } from '../ActiveFilterList/ActiveFilterList'
import s from './ProductListHeader.module.scss'

import { CellButton, ListButton } from '@/widget/ThemeButtons'

const ProductListHeader = memo(() => {
    return (
        <header className={s.header}>
            <ActiveFilterList />
            <div className={s['toggle-preview-wrapper']}>
                <CellButton />
                <ListButton />
            </div>
        </header>
    )
})

ProductListHeader.displayName = 'ProductListHeader'

export default ProductListHeader
