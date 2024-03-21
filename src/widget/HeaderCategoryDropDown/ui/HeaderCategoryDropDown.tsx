'use client'

import { FC, useState } from 'react'

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
            <DropDown />
        </DropDownMenu>
    )
}

HeaderCategoryDropDown.displayName = 'HeaderCategoryDropDown'

export default HeaderCategoryDropDown
