'use client'

import { Button } from '@/components/shared/ui/Button'
import { Input } from '@/components/shared/ui/Input'
import { Static, Type } from '@sinclair/typebox'
import { useForm } from 'react-hook-form'
import { typeBoxResolver } from '@/lib/typeboxValidator'

const schema = Type.Object({
  email: Type.String({ format: 'email' }),
  username: Type.String({ minLength: 3 }),
  password: Type.String({ minLength: 6 }),
  age: Type.Number({ minimum: 18 }),
})

type FormValues = Static<typeof schema>

export default function DesignComponentsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: typeBoxResolver(schema),
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col gap-6 w-full min-h-full px-4 py-6 text-box-light-text bg-box-light rounded-xl shadow-xl">
      <h1 className="text-2xl font-semibold">Componentes UI</h1>
      <p className="text-sm">Demonstração dos componentes reutilizáveis.</p>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="tertiary">Terciário</Button>
        <Button variant="error">Erro</Button>
        <Button variant="success">Sucesso</Button>
        <Button loading variant="primary">
          Carregando
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          iconLeft="RiMailFill"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="Usuário"
          placeholder="Digite seu usuário"
          iconLeft="RiUserFill"
          {...register('username')}
          error={errors.username?.message}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="******"
          iconLeft="RiLockFill"
          iconRight="RiEyeFill"
          {...register('password')}
          error={errors.password?.message}
        />

        <Input
          label="Idade"
          type="number"
          placeholder="Ex: 28"
          iconLeft="RiCalendar2Fill"
          {...register('age')}
          error={errors.age?.message}
        />

        <Input label="CPF" mask="cpf" placeholder="000.000.000-00" iconLeft="RiUserFill" />

        <Input
          label="CNPJ"
          mask="cnpj"
          placeholder="00.000.000/0000-00"
          iconLeft="RiBuildingFill"
        />

        <Input label="Telefone" mask="phone" placeholder="(00) 00000-0000" iconLeft="RiPhoneFill" />

        <Input
          label="Data"
          mask="date"
          placeholder="DD/MM/AAAA"
          iconLeft="RiCalendar2Fill"
          wrapperClass="w-38"
        />

        <Input
          label="Hora"
          mask="hour"
          placeholder="HH:mm"
          iconLeft="RiTimeFill"
          wrapperClass="w-fit"
        />

        <button
          type="submit"
          className="w-full bg-theme-brand-primary-normal text-white font-medium py-2 rounded-lg hover:bg-theme-brand-primary-dark transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
