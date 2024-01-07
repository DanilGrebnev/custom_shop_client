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

    const categories = useAppSelector(getCategoryData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
            .unwrap()
            .catch((err) => {
                console.error('Ошиба получения категорий')
                console.error(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    Shop by category
                </Button>
            }>
            <DropDown categories={categories} />
        </DropDownMenu>
    )
}
