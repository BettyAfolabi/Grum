import LoadingSkeleton  from '@/app/health/skeleton'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSkeleton  width="200px"
    height="50px"
    borderRadius="8px"
    additionalClasses="m-5"/>
  }