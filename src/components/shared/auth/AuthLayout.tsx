'use client'

import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-box-light transition-colors duration-500">
      {/* Identity visual block (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-theme-brand-primary-normal text-white items-center justify-center p-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">🌱 Bem-vindo de volta</h1>
          <p className="text-lg">Acesse o sistema com segurança.</p>
        </div>
      </div>

      {/* Form area */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 py-12 relative ">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-md bg-box-normal p-6 rounded-xl shadow-lg">{children}</div>
      </div>
    </div>
  )
}
