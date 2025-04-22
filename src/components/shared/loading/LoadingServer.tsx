// src/components/shared/loading/LoadingServer.tsx
import { headers } from 'next/headers'
import LoadingClient from './LoadingClient'

export default async function LoadingServer() {
  const headersList = await headers()
  const cookie = headersList.get('cookie') || ''
  const themeMatch = cookie.match(/theme_preference=(dark|light)/)
  const theme = themeMatch?.[1] === 'dark' ? 'dark' : 'light'

  return <LoadingClient theme={theme} />
}
