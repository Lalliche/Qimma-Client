import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Qimma",
    description: "You're closer to the top than you think.",
    robots: "index, follow",
    openGraph: {
      title: "Qimma",
      description: "You're closer to the top than you think.",
      url: "https://qimmalearning.com",
      siteName: "Qimma",
      images: [
        {
          url: "/thumbnail.png",
          width: 1200,
          height: 630,
          alt: "Qimma preview image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Qimma",
      description: "You're closer to the top than you think.",
      images: ["/thumbnail.png"],
    },

    icons: {
      icon: "/icon.ico",
    },
  };
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
        className={`bg-[#eef2ff] text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] xxl:text-[20px]`}
        style={{
          fontFamily: isRTL ? "RH-ZAK, sans-serif" : "",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
