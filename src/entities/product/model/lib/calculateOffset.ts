interface ICalculateOffset {
    pageNumber: number
    previewItemsOnPage: number
}
/**
 * Функция рассчитывает какое количество товаров нужно пропустить
 * при пагинации
 * @param object
 * @param object.pageNumber - номер текущей страницы
 * @param object.previewItemsOnPage - видимое количество товаров на странице
 */
export const calculateOffset = ({
    pageNumber,
    previewItemsOnPage,
}: ICalculateOffset): number => {
    const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * previewItemsOnPage
    return offset
}
