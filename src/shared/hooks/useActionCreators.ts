import { useMemo } from 'react'

import { useAppDispatch } from '.'

import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'

export const useActionCreators = (actions: ActionCreatorsMapObject) => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(actions, dispatch), [])
}
