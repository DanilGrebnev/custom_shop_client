import { useMemo } from 'react'

import { useAppDispatch } from './useAppDispatch'

import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'

export const useActionCreators = <T extends ActionCreatorsMapObject>(
    actions: T
): { [key in keyof T]: T[key] } => {
    const dispatch = useAppDispatch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}
