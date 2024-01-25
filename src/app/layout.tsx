"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

const mainFrontFamily = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-family-main",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFrontFamily.variable}>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
