'use client'

import { ChangeEvent, FC, useCallback, useRef } from 'react'
import { fetchSearchInputProducts } from '../model/services/fetchSearchInputProducts'
import { useAppDispatch } from '@/shared/hooks'
import {
    resetState,
    toggleVisibleSearchList,
} from '../model/slice/productSearchInputSlice'
import { useAppSelector } from '@/shared/hooks'
import { ProductSearchInputState } from '../model/selectors/ProductSearchInputState'
import { InputSearchProductList } from '@/shared/ui/InputSearchProductList'
import { debounce } from '@/shared/lib/debounce'
import { usePathname } from 'next/navigation'
import { useOnChangeForShopPage } from '../model/hooks/useOnChangeForShopPage'
import { Input } from './Input/Input'
import { searchProductParamsActions } from '@/entities/searchProductParams'
import { useToggleVisibleSearchList } from '../model/hooks/useToggleVisibleSearchList'

import s from './ProductSearchInput.module.scss'
import clsx from 'clsx'

interface ProductSearchInputProps {
    className?: string
}

export const ProductSearchInput: FC<ProductSearchInputProps> = (props) => {
    const { className } = props

    useToggleVisibleSearchList()

    const dispatch = useAppDispatch()
    const products = useAppSelector(ProductSearchInputState.getProducts)
    const isOpenSearchList = useAppSelector(
        ProductSearchInputState.getIsOpenSearchList
    )
    const pathname = usePathname()
    const { onChangeForShopPage } = useOnChangeForShopPage()

    const uspInstance = new URLSearchParams()

    const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        uspInstance.set('search', value)

        dispatch(searchProductParamsActions.setUSP(uspInstance.toString()))

        if (pathname === '/shop') {
            onChangeForShopPage(value)
            return
        }

        if (!value) {
            return dispatch(resetState())
        }

        dispatch(fetchSearchInputProducts(value))
    }, 1000)

    const onFocus = () => {
        
    }

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
