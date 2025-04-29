'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'

export default function SSOCallback() {
  const router = useRouter()
  const { isSignedIn, isLoaded } = useAuth()

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.replace('/')
      } else {
        router.replace('/sign-in')
      }
    }
  }, [isLoaded, isSignedIn, router])

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <p className="text-lg">Conectando...</p>
    </main>
  )
}
