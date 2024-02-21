import { $axios } from '@/app/API'

export const fetchRegistration = <T>(data: T) => {
    return $axios.post('/auth/reg', data)
}
