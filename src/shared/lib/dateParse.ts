/**
 * Принимает строку даты в формате YYYY-MM-DDTHH:mm:ss.sssZ, где:
 * YYYY-MM-DD – это дата: год-месяц-день.
 * Символ "T" используется в качестве разделителя.
 * HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
 * Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm.
 * Если указать просто букву Z, то получим UTC+0.
 */
export const dateParse = (dateString?: string) => {
    if (!dateString) return
    const date = new Date(Date.parse(dateString))
    const day = date.getDate()
    const dayWithZero = day < 10 ? '0' + day : day
    const month = date.getMonth() + 1
    const monthWithZero = month < 10 ? '0' + month : month
    const year = date.getFullYear()

    return `${dayWithZero}.${monthWithZero}.${year}`
}
