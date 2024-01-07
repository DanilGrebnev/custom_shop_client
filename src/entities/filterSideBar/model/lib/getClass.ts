import clsx from 'clsx'
import s from '../../ui/FilterSideBar.module.scss'

export const getClass = (code: string) => {
    if (code === 'color') {
        return s['color-filter']
    }

    return clsx(s['category-list'], s['vertical-list'])
}
