import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing";
import QueryProvider from "@/lib/QueryProvider";
import "./globals.css";

const font = Noto_Kufi_Arabic({
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Marvel eCommerce",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning={true}>
      <body className={font.className}>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <main className='flex min-h-screen flex-col'>{children}</main>
          </QueryProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
