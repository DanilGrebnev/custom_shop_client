'use client'

import {
    ChangeEvent,
    forwardRef,
    memo,
    useCallback,
    useEffect,
    useState,
} from 'react'

import './input.scss'

import { TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// import s from './CustomInput.module.scss'
import clsx from 'clsx'

export type TCustomInput = Omit<Parameters<typeof TextField>[0], 'color'> & {
    color?: string
}

export const CustomInput = memo(
    forwardRef((props: TCustomInput, ref) => {
        const {
            color = 'var(--global-palette1)',
            onChange,
            value,
            fullWidth = true,
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
                    fullWidth={fullWidth}
                    onChange={onChange}
                    value={value}
                    className={clsx(className)}
                    {...otherProps}
                />
            </ThemeProvider>
        )
    })
)

CustomInput.displayName = 'CustomInput'
