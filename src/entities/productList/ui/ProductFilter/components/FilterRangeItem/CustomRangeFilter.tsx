import { RangeFilter } from '@/shared/ui/RangeFilter'

type Props = Parameters<typeof RangeFilter>[0]

export const CustomRangeFilter = (props: Props) => {
    
    return <RangeFilter {...props} />
}
