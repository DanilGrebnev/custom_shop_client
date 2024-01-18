'use client'

import { FC } from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
