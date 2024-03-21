export interface ICategory {
    id: number
    name: string
    slug: string
    image: string
    parent: any | null
    children: []
}

export interface IHomePageCategory extends Omit<ICategory, 'children'> {
    productCount: number
}

export interface Categories {
    categoryId: string
    categoryName: string
    image: string
    parentId: string | 'null'
    filters?: boolean
}

export interface CategoryWithChildren {
    categoryId: string
    name: string
    parent: null | string
    image: string
    children: [] | CategoryWithChildren[]
    last?: boolean
}

export interface ChildrenCategory {
    categoryId: string
    name: string
    slug: string
    image: string
    parent: number
    upperCategories: UpperCategories[]
}

interface UpperCategories {
    name: string
    categoryId: number
}
