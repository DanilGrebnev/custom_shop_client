'use client'

import Paginations from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { type CSSProperties, type FC, type ChangeEvent, memo } from 'react'
import clsx from 'clsx'
import s from './Pagination.module.scss'

interface IPaginationProps {
    className?: string
    style?: CSSProperties
    count: number
    onChange?: (event: ChangeEvent<unknown>, page: number) => void
}

export const Pagination: FC<IPaginationProps> = memo((props) => {
    const { className, style, count, onChange } = props

    return (
        <Stack
            style={style}
            className={clsx(s.pagination, className)}
            spacing={2}>
            <Paginations
                onChange={onChange}
                count={count}
                variant="outlined"
                shape="rounded"
                size="large"
            />
        </Stack>
    )
})

Pagination.displayName = 'Pagination'
