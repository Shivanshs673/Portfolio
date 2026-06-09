import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
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
    default: "Shivansh Shukla | Android & Software Developer",
    template: "%s | Shivansh Shukla",
  },
  description:
    "Portfolio of Shivansh Shukla — Android & Software Developer specializing in Kotlin, Jetpack Compose, MVVM, and REST API integration.",
  keywords: [
    "Shivansh Shukla",
    "Android Developer",
    "Software Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Shivansh Shukla | Android & Software Developer",
    description:
      "Portfolio of Shivansh Shukla — Android developer building scalable apps with Kotlin, Jetpack Compose, and MVVM.",
    url: "https://shivansh-shukla.vercel.app",
    siteName: "Shivansh Shukla Portfolio",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Shukla | Android & Software Developer",
    description:
      "Portfolio of Shivansh Shukla — Android developer building scalable apps with Kotlin, Jetpack Compose, and MVVM.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="min-h-full bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
