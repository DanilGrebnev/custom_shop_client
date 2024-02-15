'use client'

import {
    ChangeEvent,
    useEffect,
    useState,
    memo,
    useCallback,
    forwardRef,
} from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import s from './CustomInput.module.scss'
import clsx from 'clsx'
import './input.scss'

export type TCustomInput = Omit<Parameters<typeof TextField>[0], 'color'> & {
    color?: string
}

export const CustomInput = memo(
    forwardRef((props: TCustomInput, ref) => {
        const {
            color = 'var(--global-palette1)',
            onChange,
            value,
            className,
            ...otherProps
        } = props

        const theme = createTheme({
            palette: {
                //@ts-ignore
                custom: {
                    main: color,
                },
            },
        })

        return (
            <ThemeProvider theme={theme}>
                <TextField
                    inputRef={ref}
                    //@ts-ignore
                    color="custom"
                    onChange={onChange}
                    value={value}
                    className={clsx(s.input, className)}
                    {...otherProps}
                />
            </ThemeProvider>
        )
    })
)

CustomInput.displayName = 'CustomInput'
