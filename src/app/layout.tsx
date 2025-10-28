import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeRegen Portal",
  description: "BeRegen Foundation — regenere sua vida, regenere o planeta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 top-0 left-0 bg-primary text-primary-foreground p-4">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
