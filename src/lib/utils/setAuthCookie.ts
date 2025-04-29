import Cookies from 'js-cookie'

interface AuthData {
  accessToken: string
  userId: string
  role: string
  permissions: Record<string, any>
  createdAt: number
}

export function createAuthData(session: any): AuthData {

  return {
    accessToken: session.id,
    userId: session.user.id,
    role: 'user',
    permissions: {},
    createdAt: Date.now(),
  }
}

export function setAuthCookie(authData: AuthData) {
  Cookies.set('authData', JSON.stringify(authData), {
    path: '/',
    secure: true,
    sameSite: 'Strict',
    expires: 7, // 7 days
  })
}
