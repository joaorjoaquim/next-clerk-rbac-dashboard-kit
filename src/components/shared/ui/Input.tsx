'use client'

import { cn } from '@/lib/utils/cn'
import * as RemixIcons from '@remixicon/react'
import { InputHTMLAttributes, forwardRef, useRef, useEffect, useState } from 'react'
import { withMask } from 'use-mask-input'

export type InputVariant = 'default' | 'error'
export type IconName = keyof typeof RemixIcons
export type MaskType = 'cpf' | 'cnpj' | 'phone' | 'date' | 'hour' | 'currency'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  iconLeft?: IconName
  iconRight?: IconName
  error?: string
  mask?: MaskType
  wrapperClass?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, iconLeft, iconRight, error, mask, wrapperClass = 'w-full', className, type, ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'

    useEffect(() => {
      if (inputRef.current && mask) {
        const applyMask = withMask(getMaskPattern(mask))
        applyMask(inputRef.current)
      }
    }, [mask])

    const IconLeft = iconLeft ? RemixIcons[iconLeft] : null
    const IconRight = iconRight
      ? RemixIcons[iconRight]
      : isPassword
        ? showPassword
          ? RemixIcons['RiEyeOffLine']
          : RemixIcons['RiEyeLine']
        : null

    const handleTogglePassword = () => {
      if (isPassword) {
        setShowPassword((prev) => !prev)
      }
    }

    return (
      <div className={cn('flex flex-col gap-1', wrapperClass)}>
        {label && <label className="text-sm font-medium">{label}</label>}
        <div
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 bg-input-background',
            error ? 'border-theme-error-normal' : 'border-input-border'
          )}
        >
          {IconLeft && <IconLeft className="w-5 h-5 text-input-icon" />}
          <input
            {...props}
            ref={(el) => {
              inputRef.current = el
              if (typeof ref === 'function') ref(el)
              else if (ref) ref.current = el
            }}
            type={isPassword ? (showPassword ? 'text' : 'password') : type}
            className={cn(
              'bg-transparent w-full text-sm outline-none placeholder:text-theme-gray-400',
              className
            )}
          />
          {IconRight && (
            <button
              type="button"
              onClick={handleTogglePassword}
              className="focus:outline-none text-theme-gray-400 hover:text-theme-brand-primary-light transition"
            >
              <IconRight className="w-5 h-5 text-input-icon" />
            </button>
          )}
        </div>
        {error && <span className="text-xs text-theme-error-normal">{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

function getMaskPattern(mask?: MaskType) {
  switch (mask) {
    case 'cpf':
      return '999.999.999-99'
    case 'cnpj':
      return '99.999.999/9999-99'
    case 'phone':
      return '(99) 99999-9999'
    case 'date':
      return '99/99/9999'
    case 'hour':
      return '99:99'
    case 'currency':
      return 'brl-currency'
    default:
      return ''
  }
}
