import "./globals.css";

import ThemeProvider from "@/components/layout/ThemeProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <ScrollProgress />

          {children}

          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}