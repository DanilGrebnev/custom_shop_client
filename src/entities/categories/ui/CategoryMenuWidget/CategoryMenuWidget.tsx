'use client'

import { FC, useEffect, useState } from 'react'

import { fetchCategories, getCategoryData } from '@/entities/categories'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui/Button'
import { DropDownMenu } from '@/shared/ui/DropDownMenu'

import s from './CategoryMenuWidget.module.scss'
import { DropDown } from './components/DropDown/DropDown'

interface ICategoryMenuWidgetProps {
    className?: string
    active?: boolean
}

export const CategoryMenuWidget: FC<ICategoryMenuWidgetProps> = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()

    const categories = useAppSelector(getCategoryData)

    useEffect(() => {
        dispatch(fetchCategories())
            .unwrap()
            .catch((err) => {
                console.error('Ошиба получения категорий')
                console.error(err)
            })
    }, [dispatch])

    return (
        <DropDownMenu
            setIsOpenState={setOpen}
            buttonElement={
                <Button
                    size="L"
                    open={open}
                    icon={true}
                    className={s['category-menu-widget-button']}
                    menuIcon={true}
                    borderRadius="top">
                    Категории
                </Button>
            }>
            <DropDown categories={categories} />
        </DropDownMenu>
    )
}

export default CategoryMenuWidget
