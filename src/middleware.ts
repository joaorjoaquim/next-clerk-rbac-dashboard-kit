import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server";

const isPublicRoute = ["/sign-in", "/sign-up"];
const REDIRECT_WHEN_NOT_AUTHENTICATED = "/sign-in";
const REDIRECT_WHEN_AUTHENTICATED = "/";

const isPublicAsset = (path: string) => {
  return path.startsWith("/public") || /\.(png|jpg|jpeg|webp|svg|gif|ico|woff2?|ttf|css|js)$/.test(path);
};

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const session = await auth()

  if (isPublicAsset(path)) {
    return NextResponse.next();
  }

  // Allow public routes to load
  if (isPublicRoute.includes(path)) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to sign-in
  if (!session.userId) {
    return NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, req.url));
  }

  const authCookie = req.cookies.get("authData")?.value;
  if (!authCookie) {
    return NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, req.url));
  }

  const { userId, role, permissions } = JSON.parse(decodeURIComponent(authCookie));

  // Redirect authenticated users to `/`
  if (isPublicRoute.includes(path)) {
    return NextResponse.redirect(new URL(REDIRECT_WHEN_AUTHENTICATED, req.url));
  }

  // Add headers for SSR access
  const response = NextResponse.next();
  response.headers.set("x-user-id", userId);
  response.headers.set("x-user-role", role);
  response.headers.set("x-user-permissions", encodeURIComponent(JSON.stringify(permissions)));


  return NextResponse.next();
});

export const config: MiddlewareConfig = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|cap/.*|public/.*).*)'],

};
