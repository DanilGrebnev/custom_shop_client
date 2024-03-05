import { CheckBox } from '@/shared/ui/CheckBoxes/CheckBox'
import { Papper } from '@/shared/ui/Papper'

import s from './BasketHeader.module.scss'

import clsx from 'clsx'

interface IProps {
    className?: string
}

export const BasketHeader = ({ className }: IProps) => {
    return (
        <Papper className={clsx(s.header, className)}>
            <CheckBox label="Выбрать всё" />
            <p className={s['delete-button']}>Удалить выбранное</p>
        </Papper>
    )
}
