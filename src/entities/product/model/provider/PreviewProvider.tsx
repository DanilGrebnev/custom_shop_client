'use client'

import {
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useState,
} from 'react'

interface IPreviewProvider {
    children: ReactNode
}
type TPreview = 'cell' | 'list'

export interface IContextPreviewProvider {
    preview: TPreview
    togglePreview: (type: TPreview) => void
}

export const PreviewContext = createContext<IContextPreviewProvider | {}>({})

export const PreviewProvider = (props: IPreviewProvider) => {
    const key = 'preview'

    const getFromStorage = () => {
        return (localStorage.getItem(key) || 'cell') as TPreview
    }

    const [preview, setPreview] = useState<TPreview>(() => getFromStorage())

    const togglePreview = useCallback((type: TPreview) => {
        setPreview(type)
    }, [])

    useEffect(() => {
        localStorage.setItem(key, preview)
    }, [preview])

    const context = { preview, togglePreview }

    return (
        <PreviewContext.Provider value={context}>
            {props.children}
        </PreviewContext.Provider>
    )
}

export default PreviewProvider
