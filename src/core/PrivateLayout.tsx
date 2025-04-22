'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/core/store'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import LoadingClient from '@/components/shared/loading/LoadingClient'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const auth = useSelector((state: RootState) => state.auth)
  const theme = useSelector((state: RootState) => state.theme)
  const router = useRouter()
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | null>(
    (Cookies.get('theme_preference') as 'light' | 'dark') || 'light'
  )

  useEffect(() => {
    // If authentication is already determined, stop checking
    if (auth.userId !== undefined) {
      setIsCheckingAuth(false)
    }
    document.documentElement.setAttribute('data-theme', theme ? theme.theme : 'light')
  }, [auth, router, theme])

  // ⏳ Show a loading screen while checking auth state
  if (isCheckingAuth) {
    return <LoadingClient />
  }

  // ✅ Only render children after authentication is confirmed
  return <>{children}</>
}
