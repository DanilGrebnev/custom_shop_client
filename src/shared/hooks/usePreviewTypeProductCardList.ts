import { useState, useCallback } from 'react'
import { ProductListPreviewType } from '@/app/types/Product'

const CARD_PREVIEW_TYPE = 'CART_PREVIEW_TYPE'

function getPreviewTypeCardFromLocalStorage() {
    const data = localStorage?.getItem(
        CARD_PREVIEW_TYPE
    ) as ProductListPreviewType
    return data
}

function setPreviwTypeCadtInLocalStorage(item: string) {
    localStorage.setItem(CARD_PREVIEW_TYPE, item)
}

function returnInitialPreviewState() {
    return getPreviewTypeCardFromLocalStorage() ?? ProductListPreviewType.CELL
}

export const usePreviewTypeProductCardList = () => {
    const [previewType, setPreviewType] = useState<ProductListPreviewType>(
        returnInitialPreviewState
    )

    const setRowPreviewType = useCallback(() => {
        setPreviewType(ProductListPreviewType.LIST)
        setPreviwTypeCadtInLocalStorage(ProductListPreviewType.LIST)
    }, [])

    const setCellPreviewType = useCallback(() => {
        setPreviewType(ProductListPreviewType.CELL)
        setPreviwTypeCadtInLocalStorage(ProductListPreviewType.CELL)
    }, [])

    return {
        previewType,
        setRowPreviewType,
        setCellPreviewType,
    }
}
