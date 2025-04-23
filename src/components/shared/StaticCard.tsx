import { cn } from '@/lib/utils/cn'
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StaticCard({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'p-4 rounded-xl border border-box-normal bg-box-light text-box-light-text shadow-sm',
        className
      )}
      {...props}
    />
  )
}
