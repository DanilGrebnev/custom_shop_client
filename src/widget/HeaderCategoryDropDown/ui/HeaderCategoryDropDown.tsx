'use client'

import { FC, useEffect, useMemo, useState } from 'react'

import { fetchCategories, getCategoryData } from '@/entities/categories'

import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui/Button'
import { DropDownMenu } from '@/shared/ui/DropDownMenu'

import { DropDown } from './DropDown/DropDown'
import s from './HeaderCategoryDropDown.module.scss'

import clsx from 'clsx'

interface ICategoryMenuWidgetProps {
    className?: string
    active?: boolean
}

export const HeaderCategoryDropDown: FC<ICategoryMenuWidgetProps> = (props) => {
    const { className } = props
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

    const updatedCategoris = useMemo(
        () =>
            categories.map((cetegory) => ({
                id: cetegory.name,
                label: cetegory.name,
            })),
        [categories]
    )

    return (
        <DropDownMenu
            className={clsx(className)}
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
            <DropDown categories={updatedCategoris} />
        </DropDownMenu>
    )
}

HeaderCategoryDropDown.displayName = 'HeaderCategoryDropDown'

export default HeaderCategoryDropDown
