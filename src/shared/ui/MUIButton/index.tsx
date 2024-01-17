import { FC, memo } from 'react'
import { Button, ThemeProvider, createTheme } from '@mui/material'

type IMUIButtonProps = Omit<Parameters<typeof Button>[0], 'color'> & {
    color?: string
}

export const MUIButton: FC<IMUIButtonProps> = memo((props) => {
    const { color = 'var(--global-palette1)', ...otherProps } = props

    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        // use JavaScript conditional expression
                        color,
                    }),
                },
            },
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Button
                //@ts-ignore
                {...otherProps}
            />
        </ThemeProvider>
    )
})
