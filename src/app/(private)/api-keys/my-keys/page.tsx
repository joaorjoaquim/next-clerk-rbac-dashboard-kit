'use client'

import { Button } from '@/components/shared/ui/Button'
import { RiSearchLine, RiAddLine, RiSettings3Line, RiFileListLine } from '@remixicon/react'
import { useState } from 'react'

export default function MyApiKeysPage() {
  const [search, setSearch] = useState('')

  const apis = [
    {
      name: 'User Authentication API',
      description: 'API usada para autenticação e autorização',
      route: '/login',
      version: 'v2.3.1',
      updatedAt: '2024-01-15T11:30:00',
      status: 'active',
      usage: 73,
    },
    {
      name: 'Payment Gateway API',
      description: 'API para processamento de pagamentos',
      route: '/dashboard/faturamento',
      version: 'v1.8.0',
      updatedAt: '2023-12-10T14:20:00',
      status: 'active',
      usage: 45,
    },
    {
      name: 'Notification Service API',
      description: 'API para envio de notificações',
      route: '/dashboard/configuracoes',
      version: 'v2.5.2',
      updatedAt: '2024-01-20T16:45:00',
      status: 'error',
      usage: 97,
    },
  ]

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    })
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      <header>
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">Gerenciar APIs</h1>
        <p className="text-sm text-theme-gray-400 mt-1">Gerencie suas APIs, chaves e acessos</p>
      </header>

      <section className="bg-box-light text-box-light-text rounded-xl border border-box-normal p-4 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div className="flex w-full md:w-100 border border-input-border items-center gap-3 mb-4 bg-input-background p-2 rounded-lg">
            <RiSearchLine className="w-5 h-5 text-theme-gray-300" />
            <input
              placeholder="Pesquisar por APIs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full text-sm focus:outline-none text-[var(--foreground)] placeholder:text-theme-gray-400"
            />
          </div>
          <Button variant="primary" icon="RiAddLine" iconPosition="start">
            Criar nova API
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {apis.map((api) => (
            <div
              key={api.name}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border border-box-normal bg-box-light rounded-lg p-4"
            >
              <div className="flex-1">
                <h2 className="text-md font-semibold flex items-center gap-2">
                  {api.name}
                  {api.status === 'active' && (
                    <span className="text-xs bg-theme-success-normal text-white px-2 py-0.5 rounded-full">
                      Ativo
                    </span>
                  )}
                  {api.status === 'error' && (
                    <span className="text-xs bg-theme-error-normal text-white px-2 py-0.5 rounded-full">
                      Erro
                    </span>
                  )}
                </h2>
                <p className="text-sm text-theme-gray-400">{api.description}</p>
                <div className="flex flex-wrap text-xs text-theme-gray-300 mt-1 gap-3">
                  <span>🔗 {api.route}</span>
                  <span>📦 Versão: {api.version}</span>
                  <span>🕒 Atualizado: {formatDate(api.updatedAt)}</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 items-center">
                <div className="w-40">
                  <div className="text-xs mb-1">Uso: {api.usage}%</div>
                  <div className="w-full h-2 rounded bg-box-normal overflow-hidden">
                    <div
                      className="h-2 rounded bg-theme-brand-primary-normal transition-all duration-500"
                      style={{ width: `${api.usage}%` }}
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-2 md:mt-0">
                  <Button variant="secondary" icon="RiSettings3Line">
                    Status
                  </Button>
                  <Button variant="tertiary" icon="RiFileListLine">
                    Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
