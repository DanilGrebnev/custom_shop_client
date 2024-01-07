import { IProduct } from './Product'

export interface IHomePageProducts
    extends Omit<
        IProduct,
        'average_rating' | 'number_of_ratings' | 'category'
    > {}
