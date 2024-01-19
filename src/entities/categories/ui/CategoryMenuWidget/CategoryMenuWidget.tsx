'use client'

import { FC, useState, useEffect } from 'react'
import { Button } from '@/shared/ui/Button'
import { DropDownMenu } from '@/shared/ui/DropDownMenu'
import { DropDown } from './components/DropDown/DropDown'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { fetchCategories, getCategoryData } from '@/entities/categories'

import s from './CategoryMenuWidget.module.scss'

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
