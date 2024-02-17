/**
 * Функция неглубокого сравнения объектов
 */
export const notDeepEqual = (
    o1?: Record<string, any>,
    o2?: Record<string, any>
) => {
    if (!o1 || !o2) return
    for (const key in o1) {
        if (o1[key] !== o2[key]) return false
    }
    return true
}
