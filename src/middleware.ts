import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse, type MiddlewareConfig, type NextRequest } from 'next/server'

const isPublicRoute = ['/sign-in', '/sign-up', '/sso-callback']
const REDIRECT_WHEN_NOT_AUTHENTICATED = '/sign-in'
const REDIRECT_WHEN_AUTHENTICATED = '/'

const isPublicAsset = (path: string) => {
  return (
    path.startsWith('/public') ||
    /\.(png|jpg|jpeg|webp|svg|gif|ico|woff2?|ttf|css|js)$/.test(path)
  )
}

function parseAuthDataCookie(authDataRaw?: string) {
  if (!authDataRaw) return null

  try {
    const parsed = JSON.parse(authDataRaw)
    const { accessToken, userId, role, permissions, createdAt } = parsed

    if (!accessToken || !userId || !role || !permissions || !createdAt) {
      return null
    }

    const isExpired = Date.now() - createdAt > 7 * 24 * 60 * 60 * 1000
    if (isExpired) {
      return null
    }

    return { accessToken, userId, role, permissions }
  } catch (error) {
    console.error('Failed to parse authData cookie:', error)
    return null
  }
}


export default clerkMiddleware(async (auth, req: NextRequest) => {
  const path = req.nextUrl.pathname
  const session = await auth()

  if (isPublicAsset(path)) {
    return NextResponse.next()
  }

  const authDataRaw = req.cookies.get('authData')?.value
  const validatedAuth = parseAuthDataCookie(authDataRaw)
  // PUBLIC ROUTES:
  if (isPublicRoute.includes(path)) {
    if (session?.userId && validatedAuth) {
      // Session + Cookie exist => already authenticated => redirect home
      const homeUrl = new URL(REDIRECT_WHEN_AUTHENTICATED, req.url)
      return NextResponse.redirect(homeUrl)
    }
    return NextResponse.next()
  }

  // PRIVATE ROUTES:
  if (!session?.userId || !validatedAuth) {
    const signInUrl = new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, req.url)
    return NextResponse.redirect(signInUrl)
  }

  // OK (PRIVATE ROUTE + VALID SESSION)
  const { userId, role, permissions } = validatedAuth

  const response = NextResponse.next()
  response.headers.set('x-user-id', userId)
  response.headers.set('x-user-role', role)
  response.headers.set('x-user-permissions', encodeURIComponent(JSON.stringify(permissions)))

  return response
})

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|cap/.*|public/.*).*)',
  ],
}
