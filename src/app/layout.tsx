import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بندو | امکانات نرم‌افزار مدیریت رستوران",
  description:
    "امکانات بندو برای مدیریت رستوران: منو، قیمت تمام‌شده، انبار، سفارش، صندوق و گزارش‌ها.",
  openGraph: {
    title: "بندو · امکانات",
    description:
      "نرم‌افزار مدیریت رستوران — منو، انبار، فروش و گزارش در یک جا.",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
