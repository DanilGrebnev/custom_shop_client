
import s from './ProductSearch.module.scss'

import { SearchWidget } from '@/widget/SearchWidget'

export const ProductSearch = () => {
    return (
        <div className={s.wrapper}>
            <SearchWidget className={s.search} />
        </div>
    )
}
