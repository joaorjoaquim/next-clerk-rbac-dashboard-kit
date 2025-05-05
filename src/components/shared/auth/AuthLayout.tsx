'use client'

import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-[100dvw] h-[100dvh] items-center justify-center">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="relative flex flex-col lg:flex-row w-[90dvw] md:w-[700px] lg:w-[900px] bg-box-light rounded-[30px] shadow-smoth transition-colors duration-500 animate-auth-mobile lg:animate-auth">
        {/* Identity visual block (hidden on mobile) */}
        <div className="flex lg:w-1/2 bg-gradient-to-b from-theme-brand-primary-normal to-theme-brand-primary-dark text-white rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-t-none items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">🌱 Bem-vindo de volta</h1>
            <p className="text-lg">Acesse o sistema com segurança.</p>
          </div>
        </div>

        {/* Form area */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 py-12 relative ">
          <div className="w-full max-w-md p-6">{children}</div>
        </div>

        <div className="absolute bottom-0 left-0 pointer-events-none">
          <svg
            className="stroke-theme-brand-primary-normal/40"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.2"
            width="150"
            height="150"
            viewBox="0 0 177.5 177.5"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
          >
            <path d="M0,177.5 C0,79.6 79.6,0 177.5,0" />
            <path d="M0,157.5 C0,70 70,0 157.5,0" />
            <path d="M0,137.5 C0,60 60,0 137.5,0" />
          </svg>
        </div>
      </div>
    </div>
  )
}
