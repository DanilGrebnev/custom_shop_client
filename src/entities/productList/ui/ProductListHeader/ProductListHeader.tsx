import { useContext } from 'react'

import { ToggleViewButton } from '@/shared/ui/ToggleViewButton'

import {
    IContextPreviewProvider,
    PreviewContext,
} from '../../model/provider/PreviewProvider'
import { ActiveFilterList } from '../ActiveFilterList/ActiveFilterList'
import s from './ProductListHeader.module.scss'

export const ProductListHeader = () => {
    const { preview, togglePreview } = useContext(
        PreviewContext
    ) as IContextPreviewProvider

    return (
        <header className={s.header}>
            <ActiveFilterList />
            <div className={s['toggle-preview-wrapper']}>
                <ToggleViewButton
                    active={preview === 'cell'}
                    theme="cell"
                    onClick={togglePreview.bind(null, 'cell')}
                />
                <ToggleViewButton
                    active={preview === 'list'}
                    theme="list"
                    onClick={togglePreview.bind(null, 'list')}
                />
            </div>
        </header>
    )
}

export default ProductListHeader
