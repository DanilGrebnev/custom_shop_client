import clsx from 'clsx'
import s from './CounterButtons.module.scss'
import PlusIcon from '@/shared/assets/plus-icon.svg'
import MinusIcon from '@/shared/assets/minus-icon.svg'

interface ICounterButtons {
    productName?: string
    increment?: () => void
    decrement?: () => void
}

export const CounterButtons = (props: ICounterButtons) => {
    const { increment, decrement } = props
    return (
        <div className={s['counter-wrapper']}>
            <button
                onClick={increment}
                title={clsx('Увеличить количество товара', props.productName)}
                type="button">
                <PlusIcon className={clsx(s.btn__icon, s.increment)} />
            </button>
            <span className={s.count}>2</span>
            <button
                onClick={decrement}
                title={clsx('Уменьшить количество товара', props.productName)}
                type="button">
                <MinusIcon className={clsx(s.btn__icon, s.decrement)} />
            </button>
        </div>
    )
}
