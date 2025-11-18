import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "./globals.css";
import { BackgroundGradient } from "@/components/animated/background-gradient";

export const metadata: Metadata = {
  metadataBase: new URL('https://beregen.life'),
  title: {
    default: "BeRegen — Living Infrastructure for a Regenerative World",
    template: "%s | BeRegen",
  },
  description: "BeRegen is a regenerative innovation ecosystem creating open infrastructure for ecological diagnostics, impact validation, regenerative identity and community-aligned finance.",
  openGraph: {
    title: "BeRegen — Living Infrastructure for a Regenerative World",
    description: "Open ecosystem for ecological diagnostics, impact validation and regenerative identity.",
    url: "https://beregen.life",
    siteName: "BeRegen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeRegen — Living Infrastructure for a Regenerative World",
    description: "Open ecosystem for ecological diagnostics, impact validation and regenerative identity.",
    images: ["/og-image.png"],
  },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <BackgroundGradient />
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
