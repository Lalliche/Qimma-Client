import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css"; // make sure this path is correct

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`scroll-smooth ${locale === "ar" ? "locale-ar" : "locale-en"}`}
    >
      <body
        className={`bg-[#eef2ff] text-[12px]  md:text-[14px] lg:text-[15px] xl:text-[16px] xxl:text-[20px] `}
        style={{
          fontFamily: isRTL ? "RH-ZAK, sans-serif" : "",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
