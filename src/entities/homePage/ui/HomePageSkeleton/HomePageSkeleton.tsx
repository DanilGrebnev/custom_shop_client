import s from './HomePageSkeleton.module.scss'
import { SliderSkeleton } from '@/shared/ui/Skeletons'

export const HomePageSkeleton = () => {
    return <div className={s.HomePageSkeleton}></div>
}

HomePageSkeleton.displayName = 'HomePageSkeleton'
