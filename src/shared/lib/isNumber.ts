/**
 * Функция проверяет, есть ли в строке что-то помимо числа
 * @param string
 */
export const isNumber = (string: string) => {
    return !/\D/.test(string)
}
