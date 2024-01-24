import { Dispatch, SetStateAction } from 'react'

export type TTheme = 'dark' | 'light'

export interface ICreateContext {
    theme: TTheme
    setTheme: Dispatch<SetStateAction<TTheme>>
}
