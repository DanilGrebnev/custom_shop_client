'use client'

import { ChangeEvent, useEffect, useState, memo, useCallback } from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import './input.scss'
import s from './CustomInput.module.scss'
import clsx from 'clsx'

export type TCustomInput = Omit<Parameters<typeof TextField>[0], 'color'> & {
    color?: string
}

export const CustomInput = memo((props: TCustomInput) => {
    const {
        color = 'var(--global-palette1)',
        onChange,
        value,
        className,
        ...otherProps
    } = props

    const [inputValue, setValue] = useState<string>('')

    useEffect(() => {
        setValue(value as string)
    }, [value])

    const theme = createTheme({
        palette: {
            //@ts-ignore
            custom: {
                main: color,
            },
        },
    })

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
            onChange?.(e)
        },
        [onChange]
    )

    return (
        <ThemeProvider theme={theme}>
            <TextField
                //@ts-ignore
                color="custom"
                onChange={handleChange}
                value={inputValue}
                className={clsx(s.input, className)}
                {...otherProps}
            />
        </ThemeProvider>
    )
})

CustomInput.displayName = 'CustomInput'
