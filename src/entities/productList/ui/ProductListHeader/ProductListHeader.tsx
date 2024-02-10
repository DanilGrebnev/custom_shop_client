import { useContext } from 'react'
import { ToggleViewButton } from '@/shared/ui/ToggleViewButton'
import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'

import s from './ProductListHeader.module.scss'

export const ProductListHeader = () => {
    const { preview, togglePreview } = useContext(
        PreviewContext
    ) as IContextPreviewProvider

    return (
        <header className={s.header}>
            <ToggleViewButton
                active={preview === 'cell'}
                theme="cell"
                onClick={() => togglePreview('cell')}
            />
            <ToggleViewButton
                active={preview === 'list'}
                theme="list"
                onClick={() => togglePreview('list')}
            />
        </header>
    )
}
