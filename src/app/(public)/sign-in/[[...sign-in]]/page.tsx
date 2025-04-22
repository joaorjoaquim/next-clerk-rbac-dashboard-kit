'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser, SignIn } from '@clerk/nextjs'
import Cookies from 'js-cookie'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import LoadingClient from '@/components/shared/loading/LoadingClient'

export default function Page() {
  const { user, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn && user) {
      //   fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/users/${user.id}/role`)
      //     .then((res) => res.json())
      //     .then(({ role, permissions }) => {
      //       const authData = JSON.stringify({ userId: user.id, role, permissions });

      //       // Store in secure cookie
      //       Cookies.set("authData", authData, { path: "/", secure: true, sameSite: "Strict" });

      //       router.push("/"); // Redirect to home
      //     });
      const authData = JSON.stringify({
        userId: user.id,
        role: `user`,
        permissions: {},
      })
      Cookies.set('authData', authData, {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      })
      router.push('/') // Redirect to home
    }
  }, [isSignedIn, user])

  return (
    <main className="flex w-[100dvw] h-[100dvh] items-center justify-center">
      <div className="fixed top-2 right-2 ">
        <ThemeToggle />
      </div>
      {!isSignedIn ? <SignIn /> : <LoadingClient />}
    </main>
  )
}
