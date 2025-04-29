'use client'

import { useSignIn } from '@clerk/nextjs'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { GoogleSignInButton } from './GoogleSignInButton'

export function SignInForm() {
  const { isLoaded, signIn } = useSignIn()

  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async () => {
    if (!isLoaded) return
    try {
      await signIn?.create({ identifier: email })
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Erro ao entrar')
    }
  }

  return (
    <>
      <span className="flex min-w-full items-center justify-center text-2xl font-semibold text-box-light-text mb-6 text-center">
        Entrar
      </span>

      <Input
        type="email"
        label="Email"
        placeholder="Digite o endereço de e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        iconLeft="RiMailLine"
      />

      {error && <p className="text-sm text-theme-error-normal mt-2">{error}</p>}

      <Button
        className="w-full mt-6"
        onClick={handleSignIn}
        icon="RiArrowRightLine"
        iconPosition="end"
      >
        Continuar
      </Button>

      <div className="my-4 py-3 border-t border-theme-gray-300 dark:border-theme-gray-600 text-center text-xs uppercase text-box-light-text">
        <span className="bg-box-normal px-2 -mt-3 inline-block">ou</span>
      </div>

      <GoogleSignInButton />

      <p className="text-sm text-center mt-6 text-box-light-text">
        Não possui uma conta?{' '}
        <a href="/sign-up" className="text-theme-brand-primary-normal hover:underline">
          Registre-se
        </a>
      </p>
    </>
  )
}
