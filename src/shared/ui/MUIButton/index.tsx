import { FC, memo } from 'react'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material'
import Link from 'next/link'
import clsx from 'clsx'

import s from './s.module.scss'

type IMUIButtonProps = Omit<Parameters<typeof Button>[0], 'color'> & {
    color?: string
    href?: string
}

export const MUIButton: FC<IMUIButtonProps> = memo((props) => {
    const { color, href, className, ...otherProps } = props

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
            {href ? (
                <Link
                    className={clsx(s.button, className)}
                    href={href}>
                    <Button
                        //@ts-ignore
                        {...otherProps}
                    />
                </Link>
            ) : (
                <Button
                    className={clsx(s.button, className)}
                    //@ts-ignore
                    {...otherProps}
                />
            )}
        </ThemeProvider>
    )
})

MUIButton.displayName = 'MUIButton'
