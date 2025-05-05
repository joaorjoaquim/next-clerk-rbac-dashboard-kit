'use client'

import { useSignUp } from '@clerk/nextjs'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { GoogleSignUpButton } from './GoogleSignUpButton'

export function SignUpForm() {
  const { isLoaded, signUp } = useSignUp()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async () => {
    if (!isLoaded) return
    try {
      await signUp?.create({
        emailAddress: email,
        password,
      })
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Erro ao cadastrar')
    }
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-box-light-text mb-6">Criar sua conta</h2>

      <div className="flex flex-col gap-3">
        <Input
          label="Seu e-mail"
          type="email"
          placeholder="Digite o endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          iconLeft="RiMailLine"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconLeft="RiLockLine"
        />

        {error && <p className="text-sm text-theme-error-normal mt-2">{error}</p>}
      </div>
      <Button
        className="w-full mt-6"
        icon="RiArrowRightLine"
        iconPosition="end"
        onClick={handleSignUp}
      >
        Criar conta
      </Button>

      <div className="my-4 py-3 border-t border-theme-gray-300 text-center text-xs uppercase text-box-light-text">
        <span className="px-2 -mt-3 inline-block">ou</span>
      </div>

      <GoogleSignUpButton />

      <p className="text-sm text-center mt-6 text-box-light-text">
        Já possui conta?{' '}
        <a href="/sign-in" className="text-theme-brand-primary-normal hover:underline">
          Entrar
        </a>
      </p>
    </>
  )
}
