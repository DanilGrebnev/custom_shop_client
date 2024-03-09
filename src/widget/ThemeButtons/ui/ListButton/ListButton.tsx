import { useContext } from 'react'

import { IContextPreviewProvider, PreviewContext } from '@/entities/product'

import { ToggleViewButton } from '@/shared/ui/ToggleViewButton'

export const ListButton = () => {
    const { preview, togglePreview } = useContext(
        PreviewContext
    ) as IContextPreviewProvider

    return (
        <ToggleViewButton
            active={preview === 'list'}
            theme="list"
            onClick={togglePreview.bind(null, 'list')}
        />
    )
}
