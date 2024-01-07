interface ICalculatePagesAmountProps {
    productsAmount: number
    previewItemsOnPage: number
}
/**
 * Функция расчёта количества страниц при пагинации
 * @param {Object} object
 * @property {number} object.productsAmount - количество товаров
 * @property {number} object.previewItemsOnPage - количество элементов на странице
 */
export const calculatePagesAmount = ({
    productsAmount,
    previewItemsOnPage,
}: ICalculatePagesAmountProps): number => {
    const pagesAmount = productsAmount / previewItemsOnPage

    return pagesAmount % 0 !== 1 ? Math.ceil(pagesAmount) : pagesAmount
}
