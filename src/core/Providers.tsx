'use client' // Ensure this is a Client Component

import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { shadesOfPurple } from '@clerk/themes'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ClerkProvider
        localization={ptBR}
        appearance={{
          layout: {
            socialButtonsPlacement: 'bottom',
            socialButtonsVariant: 'iconButton',
            termsPageUrl: 'https://clerk.com/terms',
            logoImageUrl: `${BASE_URL}/logo.svg`, // Ensure this loads correctly
          },
          signIn: {
            baseTheme: [shadesOfPurple],
            elements: {
              headerSubtitle: 'hidden',
              logoBox: 'flex justify-center my-6', // Adds more spacing
              logoImage: 'w-52 h-auto md:w-64 lg:w-80 min-h-32', // Make
            },
          },
          signUp: {
            baseTheme: [shadesOfPurple],
            elements: {
              headerSubtitle: 'hidden', // Hides subtitle in Sign-Up as well
              logoBox: 'flex justify-center my-6', // Adds more spacing
              logoImage: 'w-52 h-auto md:w-64 lg:w-80 min-h-32', // Make
            },
          },
        }}
      >
        {children}
      </ClerkProvider>
    </ReduxProvider>
  )
}
