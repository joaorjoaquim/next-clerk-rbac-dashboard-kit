'use client'

import { cn } from '@/lib/utils/cn'
import * as RemixIcons from '@remixicon/react'
import { RiLoader4Line } from '@remixicon/react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'error'
export type IconPosition = 'start' | 'end'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  icon?: keyof typeof RemixIcons
  iconPosition?: IconPosition
  className?: string
  loading?: boolean
}

export function Button({
  variant = 'primary',
  children,
  icon,
  iconPosition = 'start',
  className,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const IconComponent = icon ? RemixIcons[icon] : null
  const isDisabled = disabled || loading

  const baseStyles =
    'inline-flex items-center justify-center gap-2 p-[10px] rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none'

  const variantStyles = {
    primary:
      'border-2 border-theme-brand-primary-normal bg-theme-brand-primary-normal text-white hover:bg-theme-brand-primary-dark hover:border-theme-brand-primary-dark focus:ring-theme-brand-primary-light',
    secondary:
      'border-2 border-theme-brand-primary-normal text-theme-brand-primary-normal hover:border-theme-brand-primary-dark hover:text-theme-brand-primary-dark focus:ring-theme-brand-primary-light',
    tertiary:
      'text-theme-brand-primary-normal hover:text-theme-brand-primary-light focus:ring-theme-brand-primary-light',
    success:
      'border-2 border-theme-success-normal bg-theme-success-normal text-white hover:bg-theme-success-dark focus:ring-theme-success-light',
    error:
      'border-2 border-theme-error-normal bg-theme-error-normal text-white hover:bg-theme-error-dark focus:ring-theme-error-light',
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <RiLoader4Line className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'start' && IconComponent && (
            <IconComponent className="w-5 h-5" />
          )}
        </>
      )}
      {children}
      {!loading && icon && iconPosition === 'end' && IconComponent && (
        <IconComponent className="w-5 h-5" />
      )}
    </button>
  )
}
