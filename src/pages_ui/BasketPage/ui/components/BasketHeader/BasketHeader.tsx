import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { Papper } from '@/shared/ui/Papper'

import s from './BasketHeader.module.scss'

export const BasketHeader = () => {
    return (
        <Papper className={s.header}>
            <CheckBox label="Выбрать всё" />
            <p className={s['delete-button']}>Удалить выбранное</p>
        </Papper>
    )
}
