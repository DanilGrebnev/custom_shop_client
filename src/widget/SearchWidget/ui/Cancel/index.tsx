import { ComponentPropsWithoutRef, memo } from 'react'

import s from './s.module.scss'

import clsx from 'clsx'

export const Cancel = memo(
    ({ className, ...other }: ComponentPropsWithoutRef<'button'>) => {
        return (
            <button
                {...other}
                type="button"
                className={clsx(s.cancel, className)}>
                <div className={s['item-1']}></div>
                <div className={s['item-2']}></div>
            </button>
        )
    }
)

Cancel.displayName = 'Cancel'
