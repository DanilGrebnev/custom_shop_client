'use client'

import {
    ChangeEvent,
    ComponentPropsWithoutRef,
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useGetProductsQuery } from '@/entities/product'

import { debounce } from '@/shared/lib/debounce'
import { ModalBackgroundFilter } from '@/shared/ui/Modal'

import { NavigationRoutes } from '@/app/providers/NavigationRoutes'

import { Cancel } from './Cancel'
import { Input } from './Input/Input'
import { ProductsList } from './ProductsList/ProductsList'
import s from './SearchWidget.module.scss'

import clsx from 'clsx'

const onChange = debounce(
    (
        e: ChangeEvent<HTMLInputElement>,
        setState: Dispatch<SetStateAction<string>>
    ) => {
        setState('search=' + e.target.value)
    },
    300
)

interface ISearchWidget extends ComponentPropsWithoutRef<'div'> {}

export const SearchWidget = (props: ISearchWidget) => {
    const { className, ...other } = props
    const [state, setState] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isNotEmpty, setIsNotEmpty] = useState<boolean>(false)
    const router = useRouter()

    const { currentData, isFetching } = useGetProductsQuery(state, {
        skip: !state,
    })

    const memoizedOnChange = useCallback((e: any) => onChange(e, setState), [])

    const onClick = () => {
        if (window.innerWidth <= 710) {
            router.push(NavigationRoutes.productSearch)
            return
        }
    }

    const onFocus = () => {
        setIsOpen(true)
    }

    const onBlur = () => {
        setTimeout(setIsOpen, 100, false)
    }

    useEffect(() => {
        if (isOpen && !!currentData?.products.length) {
            setIsNotEmpty(true)
            return
        }

        if (!currentData?.products.length) {
            setIsNotEmpty(false)
        }

        if (!isOpen) {
            setIsNotEmpty(false)
        }
    }, [isOpen, currentData])

    return (
        <div
            className={clsx(s['search-widget'], className)}
            onClick={onClick}
            {...other}>
            <Input
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="Поиск товара"
                className={clsx(s.input, { [s.active]: isNotEmpty })}
                onChange={memoizedOnChange}
                isLoading={isFetching}
            />

            {isOpen && <ModalBackgroundFilter />}
            <ModalBackgroundFilter />
            {isNotEmpty && isOpen && (
                <ProductsList
                    className={s['product-list']}
                    products={currentData?.products}
                />
            )}
        </div>
    )
}
