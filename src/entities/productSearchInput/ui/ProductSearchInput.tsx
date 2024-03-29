'use client'

import { ChangeEvent, FC, useCallback, useRef } from 'react'

import { usePathname } from 'next/navigation'

import { searchProductParamsActions } from '@/entities/searchProductParams'

import { useAppDispatch } from '@/shared/hooks'
import { useAppSelector } from '@/shared/hooks'
import { debounce } from '@/shared/lib/debounce'
import { InputSearchProductList } from '@/shared/ui/InputSearchProductList'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import { useOnChangeForShopPage } from '../model/hooks/useOnChangeForShopPage'
import { useToggleVisibleSearchList } from '../model/hooks/useToggleVisibleSearchList'
import { ProductSearchInputState } from '../model/selectors/ProductSearchInputState'
import { fetchSearchInputProducts } from '../model/services/fetchSearchInputProducts'
import {
    resetState,
    toggleVisibleSearchList,
} from '../model/slice/productSearchInputSlice'
import { Input } from './Input/Input'
import s from './ProductSearchInput.module.scss'

import clsx from 'clsx'

interface ProductSearchInputProps {
    className?: string
}

export const ProductSearchInput: FC<ProductSearchInputProps> = (props) => {
    const { className } = props
    const pathname = usePathname()
    const dispatch = useAppDispatch()

    useToggleVisibleSearchList()

    const products = useAppSelector(ProductSearchInputState.getProducts)
    const isOpenSearchList = useAppSelector(
        ProductSearchInputState.getIsOpenSearchList
    )
    const { onChangeForShopPage } = useOnChangeForShopPage()

    const uspInstance = new URLSearchParams()

    const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()

        if (pathname === NavigationRoutes.shop) {
            onChangeForShopPage(value)
            return
        }

        uspInstance.set('search', value)

        dispatch(searchProductParamsActions.setUSP(uspInstance.toString()))

        if (!value) {
            return dispatch(resetState())
        }

        dispatch(fetchSearchInputProducts(value))
    }, 1000)

    const onClose = useCallback(() => {
        dispatch(toggleVisibleSearchList(false))
    }, [dispatch])

    return (
        <div className={clsx(s['product-search-input'], className)}>
            <Input
                onChange={onChange}
                placeholder="Search products..."
            />

            {isOpenSearchList && (
                <InputSearchProductList
                    onClick={onClose}
                    products={products}
                />
            )}
        </div>
    )
}
