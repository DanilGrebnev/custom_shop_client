'use client'

import { ChangeEvent, useEffect, useState, memo } from 'react'
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
        defaultValue,
        className,
        ...otherProps
    } = props

    const [input, setValue] = useState<string>('')

    useEffect(() => {
        setValue(defaultValue as string)
    }, [defaultValue])

    const theme = createTheme({
        palette: {
            //@ts-ignore
            custom: {
                main: color,
            },
        },
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange?.(e)
    }

    return (
        <ThemeProvider theme={theme}>
            <TextField
                //@ts-ignore
                color="custom"
                onChange={handleChange}
                value={input}
                className={clsx(s.input, className)}
                {...otherProps}
            />
        </ThemeProvider>
    )
})

CustomInput.displayName = 'CustomInput'
