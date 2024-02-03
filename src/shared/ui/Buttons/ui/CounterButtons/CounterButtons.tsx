import clsx from 'clsx'
import s from './CounterButtons.module.scss'

export const CounterButtons = () => {
    return (
        <div className={s['counter-wrapper']}>
            <button
                title="increment button"
                type="button">
                <i className={clsx(s.btn__icon, s.increment)}>+</i>
            </button>
            <span className={s.count}>2</span>
            <button
                title="decrement button"
                type="button">
                <i className={clsx(s.btn__icon, s.decrement)}>-</i>
            </button>
        </div>
    )
}
