import clsx from 'clsx'
import s from './ErrorComponent.module.scss'
import { ErrorDetails } from '../../ErrorDetails'
import { Button } from './Button/Button'
import React from 'react'

interface IErrorComponentProps {
    error: any
    errorCode?: number
    componentName: string
}

export const ReserveErrorComponent = (props: IErrorComponentProps) => {
    const { error, errorCode, componentName } = props

    const errorStrArray = JSON.stringify(error).split(/\\n/g)

    return (
        <section className={clsx(s['error_component'], 'contain')}>
            <h1>Oops, something went wrong.</h1>
            <h3 className={s['error_component_name']}>
                Error caught in: <span>{'<' + componentName + ' />'}</span>
            </h3>
            {errorCode ? (
                <h3 className={s['error_component_code']}>
                    error code: <span>{errorCode}</span>
                </h3>
            ) : null}
            <Button />
            <ErrorDetails>
                {errorStrArray.map((str) => {
                    return (
                        <React.Fragment key={str}>
                            <code>{str}</code>
                            <br />
                        </React.Fragment>
                    )
                })}
            </ErrorDetails>
        </section>
    )
}
