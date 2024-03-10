import { ActiveFilterList } from '../ActiveFilterList/ActiveFilterList'
import s from './ProductListHeader.module.scss'

import { CellButton, ListButton } from '@/widget/ThemeButtons'

export const ProductListHeader = () => {
    return (
        <header className={s.header}>
            <ActiveFilterList />
            <div className={s['toggle-preview-wrapper']}>
                <CellButton />
                <ListButton />
            </div>
        </header>
    )
}

export default ProductListHeader
