import { useContext } from 'react'

import { IContextPreviewProvider, PreviewContext } from '@/entities/product'

import { ToggleViewButton } from '@/shared/ui/ToggleViewButton'

export const CellButton = () => {
    const { preview, togglePreview } = useContext(
        PreviewContext
    ) as IContextPreviewProvider

    return (
        <ToggleViewButton
            active={preview === 'cell'}
            theme="cell"
            onClick={togglePreview.bind(null, 'cell')}
        />
    )
}
