import { useAppDispatch } from '../hooks'

export const useCombineDespatch = <
    FN extends (fnArgs: Parameters<FN>[0][]) => ReturnType<FN>
>(
    ...fnArray: FN[]
) => {
    const dispatch = useAppDispatch()
}
