'use client'

import { Button } from '@/components/shared/ui/Button'

export default function WalletPage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full px-4 py-6 text-box-light-text dark:text-box-light-text">
      <h1 className="text-2xl font-semibold">Minha Carteira</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-box-light dark:bg-box-dark p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Créditos Disponíveis</h2>
          <p className="text-3xl font-bold text-theme-brand-primary-normal">2.500</p>
        </div>

        <div className="bg-box-light dark:bg-box-dark p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Gastos do Mês</h2>
          <p className="text-3xl font-bold text-theme-error-normal">-1.230</p>
        </div>

        <div className="bg-box-light dark:bg-box-dark p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Recarregar Créditos</h2>
          <Button variant="primary">Adicionar</Button>
        </div>
      </section>
    </div>
  )
}
