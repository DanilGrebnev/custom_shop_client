import { useStorage, IUseStorageArguments } from './useStorage'

export const useSessionStorage = (
    props: Omit<IUseStorageArguments, 'storageObject'>
) => {
    return useStorage({ ...props, storageObject: sessionStorage })
}
