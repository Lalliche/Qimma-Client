import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  localeDetection: true, // this respects NEXT_LOCALE cookie
});

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\.).*)"],
};
