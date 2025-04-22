// src/components/shared/loading/LoadingClient.tsx
'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { RiRestartLine } from '@remixicon/react'

export default function LoadingClient({ theme: initialTheme }: { theme?: 'light' | 'dark' }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme || 'light')

  useEffect(() => {
    const cookieTheme = Cookies.get('theme_preference') === 'dark' ? 'dark' : 'light'
    setTheme(cookieTheme)
  }, [])

  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'

  return (
    <div
      className="flex flex-col w-full h-fit justify-center items-center gap-5 pt-20"
      aria-label="Carregando"
    >
      <img src={logoSrc} alt="Logo da aplicação" className="w-[95px] aspect-[3/1] object-contain" />
      <RiRestartLine className="w-9 h-9 text-theme-brand-primary-normal animate-spin" />
    </div>
  )
}
