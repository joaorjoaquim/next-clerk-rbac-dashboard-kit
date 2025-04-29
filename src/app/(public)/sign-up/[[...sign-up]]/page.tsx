'use client'
import { AuthLayout } from '@/components/shared/auth/AuthLayout'
import { SignUpForm } from '@/components/shared/auth/SignUpForm'
import { setAuthState } from '@/core/reducers/authSlice'
import { createAuthData, setAuthCookie } from '@/lib/utils/setAuthCookie'
import { useClerk, useSession, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Page() {
  const { session } = useSession()
  const { user } = useUser()
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    if (session && user) {
      const authData = createAuthData(session)

      // 1. Set cookie
      setAuthCookie(authData)

      // 2. Set redux
      dispatch(setAuthState(authData))

      // 3. Redirect
      router.replace('/')
    }
  }, [session, user, dispatch, router])
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  )
}
