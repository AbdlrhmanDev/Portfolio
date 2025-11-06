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


