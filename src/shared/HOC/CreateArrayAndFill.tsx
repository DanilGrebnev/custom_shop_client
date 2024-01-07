import clsx from 'clsx'
import { ReactNode, type FC, Fragment } from 'react'
import { v4 } from 'uuid'

interface ICreateArrayAndFillProps {
    children: ReactNode
    amount: number
    wrapperClassName?: string
    childrenClassName?: string
}

/**
 * Компонент высшего порядка принимает children
 * и возвращает его amount раз, аналогично конструкции
 * new Array(amount).fill('').map(()=> children)
 * @param amount - количество раз, которое будет возвращён children
 * @param children - элемент, который будет возвращён amount раз
 * @param childrenClassName - если указан данный параметр, то каждый children
 * будет обёрнут в div с указанным классом, так же к классу будет прибавлен индекс children-а, начиная с 1
 * @param wrapperClassName - оборачивает все возвращаемые элементы в div с классом wrapperClassName
 */
export const CreateArrayAndFill: FC<ICreateArrayAndFillProps> = (props) => {
    const { amount, children, childrenClassName, wrapperClassName } = props

    return (
        <WithWrapper className={wrapperClassName}>
            {new Array(amount).fill('').map((_, i) => {
                if (!!childrenClassName) {
                    return (
                        <div
                            key={v4()}
                            className={clsx(
                                childrenClassName,
                                childrenClassName + '-' + (i + 1)
                            )}>
                            {children}
                        </div>
                    )
                } else {
                    return <Fragment key={v4()}>{children}</Fragment>
                }
            })}
        </WithWrapper>
    )
}

interface IWithWrapperProps {
    children: ReactNode
    className?: string
}

function WithWrapper({ children, className }: IWithWrapperProps) {
    return className ? (
        <div className={clsx(className)}>{children}</div>
    ) : (
        <>{children}</>
    )
}

CreateArrayAndFill.displayName = 'CreateArrayAndFill'
