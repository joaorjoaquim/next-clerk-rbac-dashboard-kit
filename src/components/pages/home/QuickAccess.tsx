'use client'

import { Button } from '@/components/shared/ui/Button'
import { useRouter } from 'next/navigation'

export function QuickAccess() {
  const router = useRouter()

  const actions = [
    { label: 'Minhas Chaves', icon: 'RiKey2Line', path: '/api-keys/my-keys' },
    { label: 'Componentes', icon: 'RiToggleLine', path: '/design-system/components' },
    { label: 'Gráficos', icon: 'RiPieChartLine', path: '/design-system/charts' },
  ]

  return (
    <div className="bg-box-light rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-box-light-text mb-4">Quick Access</h2>
      <div className="flex flex-col gap-3">
        {actions.map(({ label, icon, path }) => (
          <Button
            key={label}
            variant="secondary"
            icon={icon as any}
            iconPosition="start"
            onClick={() => router.push(path)}
            className="justify-start"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
