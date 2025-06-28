import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

  return createMiddleware({
    ...routing,
    getLocale: () => {
      if (localeCookie && routing.locales.includes(localeCookie)) {
        return localeCookie;
      }
      return routing.defaultLocale;
    },
  })(request);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\.).*)"],
};
