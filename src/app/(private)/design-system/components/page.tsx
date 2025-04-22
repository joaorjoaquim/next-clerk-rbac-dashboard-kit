'use client'

import { Button } from '@/components/shared/ui/Button'

export default function DesignComponentsPage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full px-4 py-6 text-box-light-text dark:text-box-light-text">
      <h1 className="text-2xl font-semibold">Componentes UI</h1>
      <p className="text-sm">Demonstração dos componentes reutilizáveis.</p>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="tertiary">Terciário</Button>
        <Button variant="error">Erro</Button>
        <Button variant="success">Sucesso</Button>
        <Button loading variant="primary">
          Carregando
        </Button>
      </div>
    </div>
  )
}
