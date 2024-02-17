import { IProduct } from './product'

export interface IHomePageProducts
    extends Omit<
        IProduct,
        'average_rating' | 'number_of_ratings' | 'category'
    > {}
