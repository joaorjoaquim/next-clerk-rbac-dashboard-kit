'use client' // Ensure this is client-side

import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { shadesOfPurple } from '@clerk/themes'

export default function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'iconButton',
          termsPageUrl: 'https://clerk.com/terms',
          logoImageUrl: '/logo.svg', // Ensure this loads correctly
        },
        signIn: {
          baseTheme: [shadesOfPurple],
          elements: {
            headerSubtitle: 'hidden',
          },
        },
        signUp: {
          baseTheme: [shadesOfPurple],
          elements: {
            headerSubtitle: 'hidden', // Hides subtitle in Sign-Up as well
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}
