'use client'

import { FC } from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

export type TCustomInput = Omit<Parameters<typeof TextField>[0], 'color'> & {
    color?: string
}

export const CustomInput: FC<TCustomInput> = (props) => {
    const { color, ...otherProps } = props

    const theme = createTheme({
        palette: {
            //@ts-ignore
            custom: {
                main: color,
            },
        },
    })

    // const theme = createTheme({
    //     components: {
    //         MuiTextField: {
    //             styleOverrides: {
    //                 root: () => ({
    //                     color: 'var(--global-palette1)',
    //                 }),
    //             },
    //         },
    //     },
    // })

    return (
        <ThemeProvider theme={theme}>
            <TextField
                //@ts-ignore
                color="custom"
                {...otherProps}
            />
        </ThemeProvider>
    )
}
