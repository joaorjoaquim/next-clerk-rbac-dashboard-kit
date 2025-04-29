'use client'

import { useSignUp } from '@clerk/nextjs'

export function GoogleSignUpButton() {
  const { signUp } = useSignUp()

  const handleGoogleSignUp = async () => {
    if (!signUp) return
    await signUp.authenticateWithRedirect({
      strategy: 'oauth_google',
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/',
    })
  }

  return (
    <button
      onClick={handleGoogleSignUp}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-black border rounded-lg shadow-md hover:bg-gray-100 transition-all"
    >
      <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
      Sign up with Google
    </button>
  )
}
