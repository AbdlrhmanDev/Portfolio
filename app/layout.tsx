import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "AbdlrhmanDev - Full Stack Developer",
  description: "Portfolio of AbdlrhmanDev - Building the future with cutting-edge technology and innovative solutions",
  icons: {
    icon: '/images/code-tech-dev-svgrepo-com.svg',
    shortcut: '/images/code-tech-dev-svgrepo-com.svg',
    apple: '/images/code-tech-dev-svgrepo-com.svg',
  },
  openGraph: {
    title: "AbdlrhmanDev - Full Stack Developer",
    description: "Portfolio of AbdlrhmanDev - Building the future with cutting-edge technology and innovative solutions",
    type: "website",
    siteName: "AbdlrhmanDev Portfolio",
    images: [
      {
        url: '/images/image.png',
        width: 1200,
        height: 630,
        alt: "AbdlrhmanDev - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AbdlrhmanDev - Full Stack Developer",
    description: "Portfolio of AbdlrhmanDev - Building the future with cutting-edge technology and innovative solutions",
    images: ['/images/image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} font-arimo antialiased`}>
        {children}
      </body>
    </html>
  );
}


