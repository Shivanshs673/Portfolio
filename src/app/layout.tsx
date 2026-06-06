import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivansh-shukla.vercel.app"),
  title: {
    default: "Shivansh Shukla | Android Developer & Software Engineer",
    template: "%s | Shivansh Shukla",
  },
  description:
    "Premium portfolio for Shivansh Shukla, an Android Developer and Software Engineer focused on Kotlin, Jetpack Compose, and modern product engineering.",
  keywords: [
    "Shivansh Shukla",
    "Android Developer",
    "Software Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Shivansh Shukla | Android Developer & Software Engineer",
    description:
      "A premium, animated portfolio highlighting Android, software engineering, and modern frontend craft.",
    url: "https://shivansh-shukla.vercel.app",
    siteName: "Shivansh Shukla Portfolio",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Shukla | Android Developer & Software Engineer",
    description:
      "A premium, animated portfolio highlighting Android, software engineering, and modern frontend craft.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-slate-950 text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
