import { ComponentPropsWithoutRef, memo } from 'react'

import s from './ProductList.module.scss'

import clsx from 'clsx'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const ProductsList = memo((props: Props) => {
    const { className, ...other } = props

    console.log('ProductsList render')

    return (
        <div
            {...other}
            className={clsx(s['list-wrapper'], className)}>
            Products list
        </div>
    )
})

ProductsList.displayName = 'ProductsList'
