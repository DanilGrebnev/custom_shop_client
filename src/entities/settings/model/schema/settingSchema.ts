export interface ISettingFields {
    id: number
    color: string
    homeLogo: string
    currency: string
    is_active: boolean
}

export interface ISettingSchema {
    fields: ISettingFields
    loading: boolean
    error: {}
}
