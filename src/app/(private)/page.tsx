'use client'
import { StaticCard } from '@/components/shared/StaticCard'
import { Button } from '@/components/shared/ui/Button'

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <main className="flex-1 flex flex-col items-start justify-between overflow-y-auto">
        <section className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
          <StaticCard>
            <p className="text-sm text-zinc-400">Usuários Ativos</p>
            <p className="text-2xl font-semibold">1.204</p>
            <p className="text-green-500 text-sm">+8.5%</p>
          </StaticCard>
          <StaticCard>
            <p className="text-sm text-zinc-400">Vendas Hoje</p>
            <p className="text-2xl font-semibold">R$ 3.560</p>
            <p className="text-red-500 text-sm">-3.1%</p>
          </StaticCard>
          <StaticCard>
            <p className="text-sm text-zinc-400">Taxa de Conversão</p>
            <p className="text-2xl font-semibold">5.6%</p>
            <p className="text-green-500 text-sm">+1.2%</p>
          </StaticCard>
        </section>

        <section className="bg-box-light p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Atividades Recentes</h2>
          <ul className="space-y-2 text-sm text-box-light-text font-light">
            <li>✔️ Novo usuário cadastrado: João P.</li>
            <li>🛒 Pedido #4562 confirmado</li>
            <li>📈 Campanha de e-mail enviada</li>
          </ul>
        </section>

        <section className="flex flex-wrap gap-3 items-center justify-center">
          <Button variant="primary" icon="RiCheckLine">
            Salvar
          </Button>

          <Button variant="error" loading>
            Removendo...
          </Button>

          <Button variant="primary" icon="RiArrowRightLine" iconPosition="end">
            Avançar
          </Button>

          <Button variant="secondary" loading>
            Salvando...
          </Button>
        </section>
      </main>
    </div>
  )
}
