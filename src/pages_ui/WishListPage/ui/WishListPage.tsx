import s from './WishListPage.module.scss'
import { WishList } from './components/WishList'

export const WishListPage = () => {
    return (
        <div className={s.list}>
            <WishList />
        </div>
    )
}

WishListPage.displayName = 'WishListPage'
