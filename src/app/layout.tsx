import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Moje Kysuce",
  description: "Digital infrastructure in the Kysuce microregion in one app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true" data-lt-extension-installed="true">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
